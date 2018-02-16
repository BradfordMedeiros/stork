
const getGroupManager = () => {
  const groups = { };

  const addGroup = groupName => {
    if (typeof(groupName) !== 'string'){
      throw (new Error('groupName must be defined in call to addGroup'));
    }
    if (groups[groupName]){
      throw (new Error('group ', groupName, 'already exists'));
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
      throw (new Error('group ', groupName, 'does not exist'));
    }

    delete groups[groupName];
  };

  const addDeviceToGroup = () => {
    throw (new Error('not yet implemented'));
  };
  const removeDeviceFromGroup = () => {
    throw (new Error('not yet implemented'));
  };

  const getDevicesFromGroup = () => {
    throw (new Error('not yet implemented'));
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

