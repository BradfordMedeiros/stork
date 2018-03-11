
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
  try { // probably shouldn't be try/catch here but doesn't really matter
    deviceManager.addDevice(deviceType, deviceReachabilityInfo);
  }catch(err){
    console.log(err);
    return 'error adding device';
  }
  return 'ok';
};
const executeRemove = (deviceManager, deviceId) => {
  try {
    deviceManager.removeDevice(deviceId);
  }catch(err){
    console.log(err);
    return 'error removing device';
  }
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