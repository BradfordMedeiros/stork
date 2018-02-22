

const executeCommandCommand = (command,  commandManager) => {
  console.log(command);
  if (command.option.type === 'device'){
    console.log('device command')
  }else if (command.option.type === 'group'){
    console.log('group command');
  }else if (command.option.type === 'list_by_type'){
    const device_type = command.option.device;
    const commands = commandManager.listCommandsForDeviceByDeviceType(device_type);
    console.log(`Commands for device type [${device_type}]: `,commands);
  }
  else if (command.option.type === 'list_device'){
    const deviceId = command.option.device;
    const commands = commandManager.listCommandsForDeviceById(deviceId);
    console.log(`Commands for device id [${deviceId}]: `, commands);
  }else if (command.option.type === 'list_group'){
    console.log('command: list group')
  }
};

module.exports = executeCommandCommand;