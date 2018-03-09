
const path = require('path');

const executeConfigDeviceByText = async (configManager, deviceId, config) => {
  try {
    await configManager.configureDevice(deviceId, config);
    console.log('configuration successful for device:', deviceId);
  }catch(e){
    console.log('error configuring device')
  }
};
const executeConfigDeviceByConfigFile = async (configManager, deviceId, filename) => {
  console.log('config device by file');
  const normalizedFileName = path.resolve(filename);
  throw (new Error('not yet implemented'));
};

const executeConfigCommand = async (command, configManager) => {
  if (command.option.type === 'config_device_by_text'){
    return await  executeConfigDeviceByText(configManager, command.option.device, command.option.config);
  }else if (command.option.type === 'config_device_by_file'){
    return await executeConfigDeviceByConfigFile(configManager, command.option.device, command.option.file);
  }
};

module.exports = executeConfigCommand;