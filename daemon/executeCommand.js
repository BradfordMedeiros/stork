const loadSlaves = require('./src/loadSlaves');
const getDeviceManager = require('./src/getDeviceManager');
const getGroupManager = require('./src/getGroupManager');
const getCommandManager = require('./src/getCommandManager');
const getConfigManager = require('./src/getConfigManager');
const getExecuteCommand = require('./src/getExecuteCommand/getExecuteCommand');
const parseCommand = require('./src/parseCommand/parseCommand');

const executeCommand  = commandString => {
  const slaves = loadSlaves('./slaves');
  const deviceManager = getDeviceManager(slaves, './persistData/savedDevices');
  const groupManager = getGroupManager('./persistData/savedGroups');
  const commandManager = getCommandManager({ deviceManager, groupManager, slaves });
  const configManager = getConfigManager({ deviceManager, slaves });
  const executeCommand = getExecuteCommand({ deviceManager, groupManager, commandManager, configManager });
  const command = parseCommand(commandString);
  executeCommand(command);
};

module.exports = executeCommand;