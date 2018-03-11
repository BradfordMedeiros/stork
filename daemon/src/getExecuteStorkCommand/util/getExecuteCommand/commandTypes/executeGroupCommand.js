
const executeList  = groupManager => {
  let response = 'Stork Groups\n';
  response = response.concat('--------------------\n');
  const groups = groupManager.getGroups();

  if (Object.keys(groups).length === 0){
    response = response.concat('no groups\n');
  }else {
    response = response.concat(JSON.stringify(groups));
  }
  return response;
};

const executeAdd = (groupManager, groupName) => {
  groupManager.addGroup(groupName);
  return 'ok';
};
const executeRemove = (groupManager, groupName) => {
  groupManager.removeGroup(groupName);
  return 'ok';
};

const executeAddDeviceToGroup = (groupManager, groupName, deviceId) => {
  groupManager.addDeviceToGroup(groupName, deviceId);
  return 'ok';
};
const executeRemoveDeviceFromGroup = (groupManager, groupName, deviceId) => {
  groupManager.removeDeviceFromGroup(groupName, deviceId);
  return 'ok';
};

const executeGroupCommand = (command, groupManager) => {
  if (command.option.type === 'list'){
    return executeList(groupManager);
  }else if (command.option.type === 'add_group'){
    return executeAdd(groupManager, command.option.value);
  }else if (command.option.type === 'remove_group'){
    return executeRemove(groupManager, command.option.value);
  }else if (command.option.type === 'add_device'){
    return executeAddDeviceToGroup(groupManager, command.option.group, command.option.device);
  }else if (command.option.type === 'remove_device'){
    return executeRemoveDeviceFromGroup(groupManager, command.option.group, command.option.device);
  }
};

module.exports = executeGroupCommand;