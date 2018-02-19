const fs = require('fs');
const path = require('path');
const process = require('process');

const loadInitialData = persistFilePath => {
  console.warn('@todo check if all of these guys are valid slave types here.');
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


const getGroupManager = persistFilePath => {
  const groups = loadInitialData(persistFilePath);

  const addGroup = groupName => {
    if (typeof(groupName) !== 'string'){
      throw (new Error('groupName must be defined in call to addGroup'));
    }
    if (groups[groupName]){
      throw (new Error('group '+ groupName+ 'already exists'));
    }

    groups[groupName] = {
      devices: []
    };
    persist();
  };

  const removeGroup = groupName => {
    if (typeof(groupName) !== 'string'){
      throw (new Error('groupName must be defined in call to removeGroup'));
    }
    if (groups[groupName] === undefined){
      throw (new Error('group '+ groupName+ 'does not exist'));
    }

    delete groups[groupName];
    persist();
  };

  const addDeviceToGroup = (groupName, deviceId) => {
    if (typeof(groupName) !== 'string'){
      throw (new Error('groupName must be defined in call to addGroup'));
    }
    if (typeof(deviceId) !== 'string'){
      throw (new Error('deviceId must be defined in call to addGroup'));
    }

    if (groups[groupName] === undefined){
      throw (new Error('group: ' + groupName + ' does not exist'));
    }
    console.warn('@todo check if device name exists?');

    if (groups[groupName].devices.indexOf(deviceId) >= 0){
      throw (new Error('device already in group'));
    }

    groups[groupName].devices.push(deviceId);
    persist();
  };

  const removeDeviceFromGroup = (groupName, deviceId) => {
    if (groups[groupName] === undefined){
      throw (new Error('group: ' + groupName + ' does not exist'));
    }
    if (typeof(deviceId) !== 'string'){
      throw (new Error('deviceId must be defined in call to addGroup'));
    }

    console.warn('@todo check if device name exists?');

    if (groups[groupName].devices.indexOf(deviceId) < 0){
      throw (new Error('device not in group'));
    }

    const deviceIndex = groups[groupName].devices.indexOf(deviceId);
    groups[groupName].devices.splice(deviceIndex, 1);
    persist();
  };

  const getDevicesFromGroup = groupName => {
    if (groups[groupName] === undefined){
      throw (new Error('group: ' + groupName + ' does not exist'));
    }
    if (groups[groupName] === undefined){
      throw (new Error('group: ' + groupName + ' does not exist'));
    }
    return groups[groupName].devices.map(deviceId => deviceId);
  };

  const groupExists = groupName => groups[groupName] !== undefined;

  const getGroups = () => JSON.parse(JSON.stringify(groups));

  const persist = () => {
    const shouldPersist = persistFilePath !== undefined;
    if (shouldPersist){
      const normalizedFilePath = path.resolve(persistFilePath);
      try {
        fs.writeFileSync(normalizedFilePath, JSON.stringify(groups));
      }catch(err){
        console.log('persist failed: ', err);
        console.log('error not handled gracefully');
      }
    }
  };

  const groupManager = {
    addGroup,
    removeGroup,
    addDeviceToGroup,
    getDevicesFromGroup,
    removeDeviceFromGroup,
    getGroups,
    groupExists,
  };

  return groupManager;
};

module.exports = getGroupManager;

