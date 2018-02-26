

const executeValidateConfigForDeviceByText = () => {
  console.log('validate config for device by text');
  throw (new Error('not yet implemented'));
};
const executeConfigDeviceByConfigFile = (configManager, deviceId, filename) => {
  console.log('config device by file');
  const normalizedFileName = path.resolve(filename);
  throw (new Error('not yet implemented'));
};

const executeValidateConfigCommand = (command, configManager) => {
  if (command.option.type === 'config_device_by_text'){
    executeValidateConfigForDeviceByText(configManager, command.option.device, command.option.config);
  }else if (command.option.type === 'config_device_by_file'){
    executeConfigDeviceByConfigFile(configManager, command.option.device, command.option.file);
  }
};

module.exports = executeValidateConfigCommand;