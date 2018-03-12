
const getStatusManager = ({ deviceManager, onStatus, slaves }) => {
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

    const device = deviceManager.getDeviceById(deviceId);
    const deviceType = device.type;
    const reachabilityInfo = deviceManager.getReachabilityInfoById(deviceId);
    const getStatus = slaves[deviceType].status;

    let deviceStatus;
    try {
      deviceStatus = await getStatus(reachabilityInfo);
    }catch(err){
      deviceStatus = 'error executing status';
    }

    setImmediate(() => {
      onStatus(device, deviceStatus);
    });
    return deviceStatus;
  };

  const statusManager = {
    getDeviceStatus,
  };

  return statusManager;
};

module.exports = getStatusManager;