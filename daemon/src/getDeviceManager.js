
const uuid = require('uuid');

const getDeviceManager = slaves => {

  const devices = { };

  const addDevice = (deviceType, deviceIdentifierOptions) => {
    const slave = slaves[deviceType];
    if (slave === undefined){
      throw (new Error('device type not supported'));
    }
    if (!slave.isValidReachabilityInfo(deviceIdentifierOptions.resourceInfo)){
      throw (new Error('device type has bad reachability info'));
    }

    devices[uuid()] = ({
      type: deviceType,
      info: deviceIdentifierOptions.resourceInfo,
    });

  };
  const removeDevice = id => {
    delete devices[id];
  };
  const listDevicesAsString = () => JSON.stringify(devices);

  const deviceManager = {
    addDevice,
    removeDevice,
    listDevicesAsString,
  };

  return deviceManager;
};

module.exports = getDeviceManager;