

const executeValidateConfigForDeviceByText = async (configManager, deviceId, config) => {
  const isValid =  await configManager.isValidDeviceConfiguration(deviceId, config);
   return `Is valid: ${isValid}`;
};
const executeConfigDeviceByConfigFile = async (configManager, deviceId, filename) => {
  console.log('config device by file');
  const normalizedFileName = path.resolve(filename);
  throw (new Error('not yet implemented'));
};

const executeValidateConfigCommand = async (command, configManager) => {
  if (command.option.type === 'config_device_by_text'){
    return await executeValidateConfigForDeviceByText(configManager, command.option.device, command.option.config);
  }else if (command.option.type === 'config_device_by_file'){
    return await executeConfigDeviceByConfigFile(configManager, command.option.device, command.option.file);
  }
};

module.exports = executeValidateConfigCommand;