
const express = require('express');

const app = express();

app.get('/status', (req, res) => {
  res.send('ok');
});

app.post('/config', (req, res) => {
  res.send('ok');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log('listening on port: ', PORT);
});