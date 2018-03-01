
const getStatusManager = ({ deviceManager, slaves }) => {
  if (deviceManager === undefined){
    throw (new Error('StatusManager: deviceManager is not defined'));
  }
  if (slaves === undefined){
    throw (new Error('StatusManager: slaves is not defined'));
  }

  const getDeviceStatus = async deviceId => {
    if (deviceId === undefined){
      throw (new Error('invalid parameters'));
    }

    const deviceType = deviceManager.getDeviceById(deviceId).type;
    const getStatus = slaves[deviceType].status;
    return await getStatus();
  };

  const statusManager = {
    getDeviceStatus,
  };

  return statusManager;
};

module.exports = getStatusManager;