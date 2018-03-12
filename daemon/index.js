const http = require('http');
const process = require('process');
const getProgramOptions = require('./src/getProgramOptions');
const getMqttClient = require('./src/getMqttClient');
const getExecuteStorkCommand = require('./src/getExecuteStorkCommand/getExecuteStorkCommand');


const getTopicName = device => `${device.type}/${device.id}`;
const getTopicValue = status => status;

const programOptions = getProgramOptions(process.argv);
console.log('options: ', programOptions)

const run = (async () => {
  let publish = () => { };
  if (programOptions.mqttBroker === true){
    publish = await getMqttClient(programOptions.mqttUrl);
    console.log('network: MQTT CLIENT CONNECTED');
  }

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


