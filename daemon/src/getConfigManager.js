

const getConfigManager = ({ deviceManager, slaves }) => {
  if (deviceManager === undefined){
    throw (new Error('ConfigManager: deviceManager is not defined'));
  }
  if (slaves === undefined){
    throw (new Error('ConfigManager: slaves is not defined'));
  }

  const isValidDeviceConfiguration = (deviceType, config) => {
    if (deviceType === undefined || config === undefined){
      throw (new Error('invalid parameters'));
    }
    const device = slaves[deviceType];
    if (device === undefined){
      throw (new Error('invalid device type'));
    }
    return device.isValidConfig(config);
  };
  const configureDevice = async (deviceId, config) => {
    if (deviceId === undefined || config === undefined){
      throw (new Error('invalid parameters'));
    }

    const deviceType = deviceManager.getDeviceById(deviceId).type;
    const isValidConfiguration = isValidDeviceConfiguration(deviceType, config);
    if (isValidConfiguration !== true){
      throw (new Error('invalid configuration'));
    }
    const device = slaves[deviceType];
    if (device === undefined){
      throw (new Error('invalid device'));
    }
    return await device.config(config);
  };


  const configManager = {
    isValidDeviceConfiguration,
    configureDevice,
  };
  return configManager;
};

module.exports = getConfigManager;