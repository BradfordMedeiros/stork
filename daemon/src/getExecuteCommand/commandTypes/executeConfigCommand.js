

const executeConfigDeviceByText = (configManager, deviceId, config) => {
  console.log('config  device by text');
};
const executeConfigDeviceByConfigFile = (configManager, deviceId, filename) => {
  console.log('config device by file');
};

const executeConfigCommand = (command, configManager) => {
  console.log('--config command --');
  console.log(command);
  if (command.option.type === 'config_device_by_text'){
    executeConfigDeviceByText(configManager, command.option.device, command.option.config);
  }else if (command.option.type === 'config_device_by_file'){
    executeConfigDeviceByConfigFile(configManager, command.option.device, command.option.file);
  }
};

module.exports = executeConfigCommand;