
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
const getGroupManager = require('./src/getGroupManager');
const getCommandManager = require('./src/getCommandManager');
const getExecuteCommand = require('./src/getExecuteCommand/getExecuteCommand');

slaves = loadSlaves('./slaves');
deviceManager = getDeviceManager(slaves, './persistData/savedDevices');
groupManager = getGroupManager('./persistData/savedGroups');
commandManager = getCommandManager({ deviceManager, groupManager, slaves });
executeCommand = getExecuteCommand({ deviceManager, groupManager, commandManager });

const commandString = process.argv.slice(1).join(' ');
const command = parseCommand(commandString);

executeCommand(command);

