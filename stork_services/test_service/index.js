
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.text({ type: 'text/html' }));

app.get('/status', (req, res) => {
  res.send('ok');
});

let value = 100;
app.post('/config', (req, res) => {
  if (!req.body || !req.body.config){
    res.status(400).jsonp({ error: 'bad params' });
    return;
  }
  res.send('ok');
});
app.get('/someconfigroute', (req, res) => {
  res.status(200).send(JSON.stringify(value));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log('listening on port: ', PORT);
});