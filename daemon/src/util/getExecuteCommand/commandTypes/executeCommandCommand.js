

const executeListByDeviceId = (commandManager, deviceId) => {
  const commands = commandManager.listCommandsForDeviceById(deviceId);
  return `Commands for device id [${deviceId}]: ${commands}`;
};
const executeListByType = (commandManager, device_type) => {
  const commands = commandManager.listCommandsForDeviceByDeviceType(device_type);
  return `Commands for device type [${device_type}]: ${commands}`;
};
const executeRunCommandForDevice = async (commandManager, deviceId, command) => {
  const value = await commandManager.executeCommandForDevice(deviceId, command);
  return value;
};

const executeListByGroup = (commandManager, group) => {
  const commands = commandManager.listCommandsByGroup(group);
  return `Commands for group [${group}]: ${commands}`;
};
const executeRunCommandForGroup = async (commmandManager, group, command) => {
  const value = await commmandManager.executeCommandForGroup(group, command);
  return value;
};

const executeCommandCommand = async (command,  commandManager) => {
  if (command.option.type === 'device'){
    return await executeRunCommandForDevice(commandManager, command.option.deviceId, command.option.command);
  }else if (command.option.type === 'group'){
    return await executeRunCommandForGroup(commandManager, command.option.group, command.option.command);
  }else if (command.option.type === 'list_by_type'){
    return await executeListByType(commandManager, command.option.device);
  }
  else if (command.option.type === 'list_device'){
    return await executeListByDeviceId(commandManager, command.option.device);
  }else if (command.option.type === 'list_group'){
    return await executeListByGroup(commandManager, command.option.group);
  }
};

module.exports = executeCommandCommand;