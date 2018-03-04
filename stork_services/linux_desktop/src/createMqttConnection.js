const mqtt = require('mqtt');

const createMqttConnection = ({ initialTopic, additionalTopics,  onMessage }) => {
  let oldTopic = initialTopic;
  const client  = mqtt.connect('mqtt://127.0.0.1:1883');

  client.on('connect', function () {
    client.subscribe([initialTopic].concat(additionalTopics));
  });

  client.on('message', onMessage);
  return ({
    end: () => client.end(),
    changeTopic: topic => {
      console.log('changing topic to : ', topic);
      if (typeof(topic) !== 'string'){
        throw (new Error('topic must be string'));
      }

      // this is bad, we should rely on the callbacks instead
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
