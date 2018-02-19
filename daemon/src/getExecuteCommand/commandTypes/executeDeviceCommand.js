
const executeList  = deviceManager => {
  console.log('Stork Devices');
  console.log('--------------------');
  const devices = deviceManager.getDevices();

  if (Object.keys(devices).length === 0){
    console.log('no devices\n');
  }else {
    console.log(devices);
  }
};

const executeAdd = (deviceManager, deviceType, deviceReachabilityInfo) => deviceManager.addDevice(deviceType, deviceReachabilityInfo);

const executeDeviceCommand = (command, deviceManager) => {
  if (command.option.type === 'list'){
   executeList(deviceManager);
  }else if (command.option.type === 'add'){
    executeAdd(deviceManager, command.option.name, command.option.reach);
  }
};

module.exports = executeDeviceCommand;