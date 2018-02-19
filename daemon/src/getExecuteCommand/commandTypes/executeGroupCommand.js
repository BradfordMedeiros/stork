
const executeList  = groupManager => {
  console.log('Stork Groups');
  console.log('--------------------');
  const groups = groupManager.getGroups();

  if (Object.keys(groups).length === 0){
    console.log('no groups\n');
  }else {
    console.log(groups);
  }
};

const executeAdd = (groupManager, groupName) => groupManager.addGroup(groupName);
const executeRemove = (groupManager, groupName) => groupManager.removeGroup(groupName);

const executeAddDeviceToGroup = (groupManager, groupName, deviceId) => groupManager.addDeviceToGroup(groupName, deviceId);
const executeRemoveDeviceFromGroup = (groupManager, groupName, deviceId) => groupManager.removeDeviceFromGroup(groupName, deviceId);

const executeGroupCommand = (command, groupManager) => {
  if (command.option.type === 'list'){
    executeList(groupManager);
  }else if (command.option.type === 'add_group'){
    executeAdd(groupManager, command.option.value);
  }else if (command.option.type === 'remove_group'){
    executeRemove(groupManager, command.option.value);
  }else if (command.option.type === 'add_device'){
    executeAddDeviceToGroup(groupManager, command.option.group, command.option.device);
  }else if (command.option.type === 'remove_device'){
    executeRemoveDeviceFromGroup(groupManager, command.option.group, command.option.device);
  }
};

module.exports = executeGroupCommand;