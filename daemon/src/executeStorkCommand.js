const loadSlaves = require('./util/loadSlaves');
const getDeviceManager = require('./util/managers/getDeviceManager');
const getGroupManager = require('./util/managers/getGroupManager');
const getCommandManager = require('./util/managers/getCommandManager');
const getConfigManager = require('./util/managers/getConfigManager');
const getExecuteCommand = require('./util/getExecuteCommand/getExecuteCommand');
const parseCommand = require('./util/parseCommand/parseCommand');

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