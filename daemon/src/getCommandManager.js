
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


  const listCommandsByDevice = deviceId => {
    if(typeof(deviceId) !== 'string'){
      throw (new Error('device id not defined as string'));
    }

    const device = deviceManager.getDeviceById(deviceId);
    console.log('execute command for device');

  };
  const listCommandsByGroup = () => {

  };

  const executeCommandForDevice = deviceId => {



  };

  const executeCommandForGroup = () => {

  };

  const commandManager = {
    listCommandsByDevice,
    listCommandsByGroup,
    executeCommandForDevice,
    executeCommandForGroup,
  };
  return commandManager;
};

module.exports = getCommandManager;