const express = require('express');
const bodyParser = require('body-parser');
const getConfigManager = require('./src/getConfigManager');
const createMqttConnection = require('./src/createMqttConnection');
const notifier = require('node-notifier');

const app = express();

const configManager = getConfigManager('./persist/config');

const { changeTopic, end } = createMqttConnection({ initialTopic: configManager.getTopic(), onMessage: ( topic, message) => {
  console.log('topic: ', topic.toString());
  console.log('message: ', message.toString());
  notifier.notify({
    title: 'Automate notification',
    message: message.toString(),
  });
}});


app.use(bodyParser.json());
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.text({ type: 'text/html' }));

app.get('/topic', (req, res) => {
  res.send(configManager.getTopic());
});

app.post('/topic', (req, res) => {
  if (!req.body || typeof(req.body.topic) !== 'string'){
    res.status(400).jsonp({ error: 'bad params' });
    return;
  }
  const notifyTopic = req.body.topic;
  configManager.setNotifyTopic(notifyTopic);
  changeTopic(configManager.getTopic()).then(() => {
    res.send('ok');
  }).catch(err => {
    res.jsonp({ error: err });
  });

});

const PORT = configManager.getWebserverPort();

app.listen(PORT, () => {
  console.log('listening on port: ', PORT);
});




