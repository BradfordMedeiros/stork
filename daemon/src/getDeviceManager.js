
const uuid = require('uuid');

const getDeviceManager = slaves => {

  const devices = { };

  const addDevice = (deviceType, reachabilityInfo) => {
    if (typeof(deviceType) !== 'string' || typeof(reachabilityInfo) !== 'string'){
      throw (new Error('invalid arguments to addDevice'));
    }

    const slave = slaves[deviceType];
    if (slave === undefined){
      throw (new Error('device type not supported'));
    }
    if (!slave.isValidReachabilityInfo(reachabilityInfo)){
      throw (new Error('device type has bad reachability info'));
    }

    devices[uuid()] = ({
      type: deviceType,
      info: reachabilityInfo,
    });

  };
  const removeDevice = id => {
    if (typeof(id) !== 'string'){
      throw (new Error('id must be string in remove device'));
    }

    delete devices[id];
  };

  const getDevices = () => JSON.parse(JSON.stringify(devices));

  const deviceManager = {
    addDevice,
    removeDevice,
    getDevices,
  };

  return deviceManager;
};

module.exports = getDeviceManager;