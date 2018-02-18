
const getGroupManager = () => {
  const groups = { };

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
  };

  const removeGroup = groupName => {
    if (typeof(groupName) !== 'string'){
      throw (new Error('groupName must be defined in call to removeGroup'));
    }
    if (groups[groupName] === undefined){
      throw (new Error('group '+ groupName+ 'does not exist'));
    }

    delete groups[groupName];
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

