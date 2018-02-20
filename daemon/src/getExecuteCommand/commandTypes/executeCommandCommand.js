

const executeCommandCommand = (command,  commandManager) => {
  console.log(command);
  if (command.option.type === 'device'){
    console.log('device command')
  }else if (command.option.type === 'group'){
    console.log('group command');
  }else if (command.option.type === 'list_device'){
    const deviceType = command.option.device;
    const commands = commandManager.listCommandsForDeviceByDeviceType(deviceType);
    console.log(commands);
  }else if (command.option.type === 'list_group'){
    console.log('command: list group')
  }
};

module.exports = executeCommandCommand;