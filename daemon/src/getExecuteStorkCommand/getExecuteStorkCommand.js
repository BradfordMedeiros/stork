const path = require('path');
const loadSlaves = require('./util/loadSlaves');
const getDeviceManager = require('./util/managers/getDeviceManager');
const getGroupManager = require('./util/managers/getGroupManager');
const getCommandManager = require('./util/managers/getCommandManager');
const getConfigManager = require('./util/managers/getConfigManager');
const getStatusManager = require('./util/managers/getStatusManager');
const getExecuteCommand = require('./util/getExecuteCommand/getExecuteCommand');
const parseCommand = require('./util/parseCommand/parseCommand');

const getExecuteStorkCommand  = ({ onStatus, pluginFolder }) => {
  const slaveFolder = path.resolve(pluginFolder ? pluginFolder : './slaves');
  const slaves = loadSlaves(slaveFolder);
  const deviceManager = getDeviceManager(slaves, './persistData/savedDevices');
  const groupManager = getGroupManager('./persistData/savedGroups');
  const commandManager = getCommandManager({ deviceManager, groupManager, slaves });
  const configManager = getConfigManager({ deviceManager, slaves });
  const statusManager = getStatusManager({
    deviceManager,
    slaves,
    onStatus,
  });

  const executeCommand = getExecuteCommand({
    deviceManager,
    groupManager,
    commandManager,
    configManager,
    statusManager,
  });

  const executeStorkCommand = async commandString => {
    const command = parseCommand(commandString);
    return await executeCommand(command);
  };
  return executeStorkCommand;
};

module.exports = getExecuteStorkCommand;