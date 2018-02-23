

const executeListByDeviceId = (commandManager, deviceId) => {
  const commands = commandManager.listCommandsForDeviceById(deviceId);
  console.log(`Commands for device id [${deviceId}]: `, commands);
};
const executeListByType = (commandManager, device_type) => {
  const commands = commandManager.listCommandsForDeviceByDeviceType(device_type);
  console.log(`Commands for device type [${device_type}]: `, commands);
};
const executeRunCommandForDevice = async (commandManager, deviceId, command) => {
  const value = await commandManager.executeCommandForDevice(deviceId, command);
  console.log('response: ', value);
};

const executeListByGroup = (commandManager, group) => {
  const commands = commandManager.listCommandsByGroup(group);
  console.log(`Commands for group [${group}]: `, commands);
};
const executeRunCommandForGroup = async (commmandManager, group, command) => {
  const value = await commmandManager.executeCommandForGroup(group, command);
  console.log('response: ', value);
};

const executeCommandCommand = (command,  commandManager) => {
  console.log(command);
  if (command.option.type === 'device'){
    executeRunCommandForDevice(commandManager, command.option.deviceId, command.option.command);
  }else if (command.option.type === 'group'){
    executeRunCommandForGroup(commandManager, command.option.group, command.option.command);
  }else if (command.option.type === 'list_by_type'){
    executeListByType(commandManager, command.option.device);
  }
  else if (command.option.type === 'list_device'){
    executeListByDeviceId(commandManager, command.option.device);
  }else if (command.option.type === 'list_group'){
    executeListByGroup(commandManager, command.option.group);
  }
};

module.exports = executeCommandCommand;