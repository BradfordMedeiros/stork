
const listCommandsForDevice = (slaves, deviceType) => Object.keys(slaves[deviceType].commands);

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

  const listCommandsByGroup = () => {

  };

  const executeCommandForDevice = deviceId => {



  };

  const executeCommandForGroup = () => {

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