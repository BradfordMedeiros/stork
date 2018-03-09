const loadSlaves = require('./util/loadSlaves');
const getDeviceManager = require('./util/managers/getDeviceManager');
const getGroupManager = require('./util/managers/getGroupManager');
const getCommandManager = require('./util/managers/getCommandManager');
const getConfigManager = require('./util/managers/getConfigManager');
const getExecuteCommand = require('./util/getExecuteCommand/getExecuteCommand');
const parseCommand = require('./util/parseCommand/parseCommand');

const executeCommand  = async commandString => {
  const { getSlaves, loadSlave, unloadSlave } = loadSlaves('./slaves');
  const deviceManager = getDeviceManager(getSlaves(), './persistData/savedDevices');
  const groupManager = getGroupManager('./persistData/savedGroups');
  const commandManager = getCommandManager({ deviceManager, groupManager, getSlaves });
  const configManager = getConfigManager({ deviceManager, getSlaves });

  const executeCommand = getExecuteCommand({
    deviceManager,
    groupManager,
    commandManager,
    configManager,
    loadSlave,
    unloadSlave,
  });

  const command = parseCommand(commandString);
  return await executeCommand(command);
};

module.exports = executeCommand;