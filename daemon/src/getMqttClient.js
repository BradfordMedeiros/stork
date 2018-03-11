const mqtt = require('mqtt')

// maybe should add timeout or something, handle disconnection?
const getMqttPublish = url => new Promise((resolve, reject) => {
  const client  = mqtt.connect(url);

  client.on('connect', function () {
    const publish = (topic, message) => client.publish(topic, message);
    resolve(publish);
  });
});

module.exports = getMqttPublish;