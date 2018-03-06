const mqtt = require('mqtt');

const onMqttConnected = (client, topics) => () => {
  console.log('mqtt connected');
  client.subscribe(topics);
  console.log('subscribing to: ', topics);
};

const createMqttConnection = ({ initialTopic, additionalTopics,  onMessage, mqttUrl }) => {
  let oldTopic = initialTopic;
  let client  = mqtt.connect(mqttUrl);
  console.log('mqtt url: ', mqttUrl);

  client.on('connect', onMqttConnected(client, [oldTopic].concat(additionalTopics)));
  client.on('message', onMessage);
  return ({
    end: () => client.end(),
    changeMqttBroker: newMqttUrl => new Promise((resolve, reject) => {
      client.end();
      client = mqtt.connect(newMqttUrl);
      client.on('connect', onMqttConnected(client, [oldTopic].concat(additionalTopics)));
      client.on('message', onMessage);
      resolve();
    }),
    changeTopic: topic => {
      console.log('changing topic to : ', topic);
      if (typeof(topic) !== 'string'){
        throw (new Error('topic must be string'));
      }

      return new Promise((resolve, reject) => {
        client.unsubscribe(oldTopic, err => {
          if (err){
            console.error(err);
            reject({ error: 'unsub' });
            return;
          }
          client.subscribe(topic, err  =>{
            if  (err){
              console.error(err);
              oldTopic = topic;
              reject({ error: 'sub'})
              return;
            }
            resolve();
          });
        });
      });
    }
  });
};

module.exports = createMqttConnection;
