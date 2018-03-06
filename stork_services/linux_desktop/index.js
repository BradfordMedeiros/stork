const express = require('express');
const bodyParser = require('body-parser');
const process = require('process');
const path = require('path');
const getConfigManager = require('./src/getConfigManager');
const createMqttConnection = require('./src/createMqttConnection');
const commands = require('./src/commands');

const app = express();

const PERSIST_PATH = path.resolve(process.env.HOME, '.stork-desktop.config')
const configManager = getConfigManager(PERSIST_PATH);
const XDGOPEN_TOPIC = 'actions/linux_desktop/open';

const { changeTopic, changeMqttBroker, end } = createMqttConnection({
  initialTopic: configManager.getTopic(),
  mqttUrl: configManager.getMqttUrl(),
  additionalTopics: [XDGOPEN_TOPIC],
  onMessage: ( topic, message) => {
  if (topic.toString() === configManager.getTopic()){
    commands.notify(message.toString());
  }else if (topic.toString() === XDGOPEN_TOPIC){
    commands.tryOpen(message.toString());
  }
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

  if (notifyTopic === XDGOPEN_TOPIC){
    res.jsonp({ error: 'reserved topic'});
    return;
  }

  configManager.setNotifyTopic(notifyTopic);
  changeTopic(configManager.getTopic()).then(() => {
    res.send('ok');
  }).catch(err => {
    res.jsonp({ error: err });
  });
});

app.get('/mqtt_url', (req, res) => { res.send(configManager.getMqttUrl()) });
app.post('/mqtt_url', (req, res) => {
  if (!req.body || typeof(req.body.mqttUrl) !== 'string'){
    res.status(400).jsonp({ error: 'bad params' });
    return;
  }
  console.log('wants to change to: ', req.body.mqttUrl);
  changeMqttBroker(req.body.mqttUrl).then(() => {
    configManager.setMqttUrl(req.body.mqttUrl);
    res.send('ok');
  }).catch(() => {
    res.send('placeholder for mqtt url');
  });
});


const PORT = 4002;

app.listen(PORT, () => {
  console.log('listening on port: ', PORT);
});




