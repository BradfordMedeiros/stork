
const path = require('path');

const executeConfigDeviceByText = async (configManager, deviceId, config) => {
  try {
    await configManager.configureDevice(deviceId, config);
    return 'configuration successful for device: ' + deviceId;
  }catch(e){
    return 'error configuring device';
  }
};
const executeConfigDeviceByConfigFile = async (configManager, deviceId, filename) => {
  return 'not yet implemented'
};

const executeConfigCommand = async (command, configManager) => {
  if (command.option.type === 'config_device_by_text'){
    return await  executeConfigDeviceByText(configManager, command.option.device, command.option.config);
  }else if (command.option.type === 'config_device_by_file'){
    return await executeConfigDeviceByConfigFile(configManager, command.option.device, command.option.file);
  }
};

module.exports = executeConfigCommand;