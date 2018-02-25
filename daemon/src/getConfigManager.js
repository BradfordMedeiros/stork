

const getConfigManager = ({ deviceManager, slaves }) => {
  if (deviceManager === undefined){
    throw (new Error('ConfigManager: deviceManager is not defined'));
  }
  if (slaves === undefined){
    throw (new Error('ConfigManager: slaves is not defined'));
  }

  const configureDevice = (deviceId, config) => {
    throw (new Error('not yet implemented'));
  };
  const isValidDeviceConfiguration = (deviceType, config) => {
    if (deviceType === undefined || config === undefined){
      throw (new Error('invalid parameters'));
    }
    const device = slaves[deviceType];
    if (device === undefined){
      throw (new Error('invalid device type'));
    }
    console.log('@todo should probably try/catch this (and all plugin functions');
    return device.isValidConfig(config);
  };

  const configManager = {
    configureDevice,
    isValidDeviceConfiguration,
  };
  return configManager;
};

module.exports = getConfigManager;