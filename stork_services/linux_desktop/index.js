const express = require('express');
const bodyParser = require('body-parser');
const getConfigManager = require('./util/getConfigManager');

const app = express();

const configManager = getConfigManager('./persist/config');

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

  res.send('ok');
});

const PORT = configManager.getWebserverPort();

app.listen(PORT, () => {
  console.log('listening on port: ', PORT);
});



