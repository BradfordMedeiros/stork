const loadSlaves = require('./util/loadSlaves');
const getDeviceManager = require('./util/managers/getDeviceManager');
const getGroupManager = require('./util/managers/getGroupManager');
const getCommandManager = require('./util/managers/getCommandManager');
const getConfigManager = require('./util/managers/getConfigManager');
const getStatusManager = require('./util/managers/getStatusManager');
const getExecuteCommand = require('./util/getExecuteCommand/getExecuteCommand');
const parseCommand = require('./util/parseCommand/parseCommand');

const getExecuteStorkCommand  = ({ onStatus }) => {
  const { getSlaves, loadSlave, unloadSlave } = loadSlaves('./slaves');
  const deviceManager = getDeviceManager(getSlaves(), './persistData/savedDevices');
  const groupManager = getGroupManager('./persistData/savedGroups');
  const commandManager = getCommandManager({ deviceManager, groupManager, getSlaves });
  const configManager = getConfigManager({ deviceManager, getSlaves });
  const statusManager = getStatusManager({
    deviceManager,
    slaves: getSlaves(),
    onStatus,
  });

  const executeCommand = getExecuteCommand({
    deviceManager,
    groupManager,
    commandManager,
    configManager,
    statusManager,
    loadSlave,
    unloadSlave,
  });

  const executeStorkCommand = async commandString => {
    const command = parseCommand(commandString);
    return await executeCommand(command);
  };
  return executeStorkCommand;
};

module.exports = getExecuteStorkCommand;