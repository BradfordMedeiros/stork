
const listCommandsForDevice = (slaves, deviceType) => Object.keys(slaves[deviceType].commands);
const findCommonCommandsForCommandArray = commandArrays => {
  const totalDevices = commandArrays.length;
  const commandCounts = { };
  commandArrays.forEach(commandArray => {
    commandArray.forEach(command => {
      if (commandCounts[command] === undefined){
        commandCounts[command] = 0;
      }
      commandCounts[command] = commandCounts[command] + 1;
    });
  });

  const commonCommands = Object.keys(commandCounts).filter(command => commandCounts[command] === totalDevices);
  return commonCommands;
};

const getCommandManager = ({ deviceManager, groupManager, slaves }) => {
  if (deviceManager === undefined){
    throw (new Error('CommandManager: deviceManager is not defined'));
  }
  if (groupManager ===  undefined){
    throw (new Error('CommandManager: groupManager is not defined'));
  }
  if (slaves === undefined){
    throw (new Error('CommandManager: slaves is not defined'));
  }

  const listCommandsForDeviceById = deviceId => {
    if(typeof(deviceId) !== 'string'){
      throw (new Error('device id not defined as string'));
    }

    const device = deviceManager.getDeviceById(deviceId);
    const deviceType = device.type;
    const commands = listCommandsForDevice(slaves, deviceType);
    return commands;
  };
  const listCommandsForDeviceByDeviceType = deviceType => {
    if (typeof(deviceType) !== 'string'){
      throw (new Error('device type not defined as string'));
    }
    if (slaves[deviceType] === undefined){
      throw (new Error('invalid device type'));
    }

    const commands = listCommandsForDevice(slaves, deviceType);
    return commands;
  };
  const executeCommandForDevice = async (deviceId, command) => {
    const device = deviceManager.getDeviceById(deviceId);
    const deviceType = device.type;
    const deviceSlave = slaves[deviceType];
    if (deviceSlave === undefined){
      throw (new Error('invalid device type: ', deviceType));
    }

    const commands = deviceSlave.commands;
    if (commands === undefined){
      throw (new Error('no commands defined'));
    }
    const commandToExecute = commands[command];
    if (commandToExecute === undefined){
      throw (new Error('invalid command for device type'));
    }
    return await commandToExecute();
  };

  const listCommandsByGroup = group => {
    const devices = groupManager.getDevicesFromGroup(group);
    const commandArray = devices.map(listCommandsForDeviceById);
    const commonCommands = findCommonCommandsForCommandArray(commandArray);
    return commonCommands;
  };
  const executeCommandForGroup = async (group, command) => {
    const commands = listCommandsByGroup(group);
    const isValidCommand = commands.indexOf(command) >= 0;
    if (isValidCommand !== true){
      throw (new Error('invalid commmand for group: ' + group + ' command: ' + command));
    }

    const devices = groupManager.getDevicesFromGroup(group);
    return await Promise.all(devices.map(deviceId => executeCommandForDevice(deviceId, command)));

  };

  const commandManager = {
    listCommandsForDeviceById,
    listCommandsForDeviceByDeviceType,
    listCommandsByGroup,
    executeCommandForDevice,
    executeCommandForGroup,
  };
  return commandManager;
};

module.exports = getCommandManager;