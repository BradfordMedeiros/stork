
/*

  usage:

  stork list

  stork status

  stork devices ls
  stork device status

  stork device <device id> ls
  stork config <some config>





 */


const loadSlaves = require('./src/loadSlaves');
const parseCommand = require('./src/parseCommand/parseCommand');
const getDeviceManager = require('./src/getDeviceManager');
const getExecuteCommand = require('./src/getExecuteCommand/getExecuteCommand');

slaves = loadSlaves('./slaves');
deviceManager = getDeviceManager(slaves);
executeCommand = getExecuteCommand(deviceManager);

const commandString = process.argv.slice(1).join(' ');
const command = parseCommand(commandString);

executeCommand(command);

