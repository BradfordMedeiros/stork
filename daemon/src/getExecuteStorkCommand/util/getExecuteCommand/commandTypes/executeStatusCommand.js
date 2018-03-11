

const executeStatusForDevice = async (statusManager, deviceId) => {
  return await statusManager.getDeviceStatus(deviceId);
};
const executeStatusForGroup = async (statusManager, group) => {
  return 'group status: not yet implemented';
};

const executeStatusCommand = async (command, statusManager) => {
  if (command.option.type === 'device_status'){
    return await executeStatusForDevice(statusManager, command.option.device);
  }else if (command.option.type === 'group_status'){
    return await executeStatusForGroup(statusManager, command.option.group);
  }
};

module.exports = executeStatusCommand;