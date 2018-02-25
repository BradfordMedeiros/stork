
const uuid = require('uuid');
const fs = require('fs');
const path = require('path');
const process = require('process');

const loadInitialData = ({ shouldPersist, persistFilePath }) => {
  if (shouldPersist !== true){
    return { };
  }

  const filePath = path.resolve(persistFilePath);
  try {
    if (!fs.existsSync(filePath)){
      return { };
    }
    const data = fs.readFileSync(filePath).toString();
    return JSON.parse(data);
  }catch (err){
    console.error('critical error could not load file -- looks corrupted');
    process.exit(1);
  }
};

const getDeviceManager = (slaves, persistFilePath) => {
  if (typeof(slaves) !== 'object'){
    throw (new Error('slaves not defined as object in call to device manager'));
  }
  const shouldPersist = persistFilePath !== undefined;
  const devices = loadInitialData({ persistFilePath, shouldPersist });

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

    const id = uuid();
    devices[id] = ({
      type: deviceType,
      info: reachabilityInfo,
    });
    persist();
    return id;
  };
  const removeDevice = id => {
    if (typeof(id) !== 'string'){
      throw (new Error('id must be string in remove device'));
    }

    delete devices[id];
    persist();
  };

  const deviceExists = id => devices[id] !== undefined;

  const getDevices = () => JSON.parse(JSON.stringify(devices));

  const getDeviceById = id => JSON.parse(JSON.stringify(devices[id]));

  const persist = () => {
    if (shouldPersist){
      const normalizedFilePath = path.resolve(persistFilePath);
      try {
        fs.writeFileSync(normalizedFilePath, JSON.stringify(devices));
      }catch(err){
        console.log('persist failed: ', err);
        console.log('error not handled gracefully');
      }
    }
  };

  const deviceManager = {
    addDevice,
    removeDevice,
    getDevices,
    getDeviceById,
    deviceExists,
  };

  return deviceManager;
};

module.exports = getDeviceManager;

