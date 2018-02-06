
/*

  usage:

  stork list

  stork status

  stork devices ls
  stork device status

  stork device <device id> ls
  stork config <some config>




 */
const express = require('express');

const app = express();

app.get('/', (req,res) => {
  res.send('ok');
});

app.get('/list', (req, res) => {
  res.send('list ok');
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log('listening on port: ', PORT);
});