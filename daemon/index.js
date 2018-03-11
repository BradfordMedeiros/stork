const http = require('http');
const getMqttClient = require('./src/getMqttClient');
const getExecuteStorkCommand = require('./src/getExecuteStorkCommand/getExecuteStorkCommand');

const MQTT_URL = 'mqtt://127.0.0.1:1883';

const getTopicName = device => `${device.type}/${device.id}`;
const getTopicValue = status => status;

const run = (async () => {

  const publish = await getMqttClient(MQTT_URL);
  console.log('network: MQTT CLIENT CONNECTED');

  const executeCommand = getExecuteStorkCommand({
    onStatus: (device, status) => { publish(getTopicName(device), getTopicValue(status)); },
  });

  const server = http.createServer((req, res) => {
    let body = '';
    req.on('data', function (data) {
      body += data;
    });
    req.on('end', async () => {
      const response = await executeCommand(body);
      res.write(response + '\n');
      res.end();
    });
  });

  server.listen(8000, () => {
    console.log('network: HTTP SERVER STARTED');
  });
})();


