
const listCommandsForDevice = (slaves, deviceType) => Object.keys(slaves[deviceType].commands);
const getUniqueDeviceTypesInGroup = ({ deviceManager, groupManager }, groupName) => {
  throw (new Error('not yet implemented'));
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
    console.log('$$/ placeholder list by group: ', group);
  };
  const executeCommandForGroup = async (group, command) => {
    console.log('placeholder execute group command:');
    console.log("group: ", group);
    console.log("command: ", command);
    console.log('---------------');
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