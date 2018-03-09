
const executeList  = deviceManager => {

  let response = 'Stork Devices\n';
  response = response.concat('--------------------\n');
  const devices = deviceManager.getDevices();

  if (Object.keys(devices).length === 0){
    response = response.concat('no devices\n');
  }else {
    response = response.concat(JSON.stringify(devices));
  }
  return response;
};

const executeAdd = (deviceManager, deviceType, deviceReachabilityInfo) => {
  deviceManager.addDevice(deviceType, deviceReachabilityInfo);
  return 'ok';
};
const executeRemove = (deviceManager, deviceId) => {
  deviceManager.removeDevice(deviceId);
  return 'ok';
};

const executeDeviceCommand = async (command, deviceManager) => {
  if (command.option.type === 'list'){
    return executeList(deviceManager);
  }else if (command.option.type === 'add'){
    return executeAdd(deviceManager, command.option.name, command.option.reach);
  }else if (command.option.type === 'delete'){
    return executeRemove(deviceManager, command.option.id);
  }
};

module.exports = executeDeviceCommand;