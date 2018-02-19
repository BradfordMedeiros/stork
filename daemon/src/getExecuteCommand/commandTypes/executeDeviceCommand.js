
const executeList  = deviceManager => {
  console.log('Stork Devices');
  console.log('--------------------');
  const devices = deviceManager.getDevices();
  const deviceArray = Object.keys(devices).map(deviceKey => devices[deviceKey]);
  if (deviceArray.length === 0){
    console.log('no devices\n');
  }else {
    console.log(deviceArray.join('\n'));
  }
};

const executeAdd = (deviceManager, deviceType, deviceReachabilityInfo) => deviceManager.addDevice(deviceType, deviceReachabilityInfo);

const executeDeviceCommand = (command, deviceManager) => {
  if (command.option.type === 'list'){
   executeList(deviceManager);
  }else if (command.option.type === 'add'){
    executeAdd(deviceManager, command.option.name, command.option.reach);
  }
  console.log(command);
};

module.exports = executeDeviceCommand;