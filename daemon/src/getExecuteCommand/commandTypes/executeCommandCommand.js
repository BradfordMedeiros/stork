

const executeCommandCommand = (command, deviceManager, groupManager) => {
  if (command.option.type === 'device'){
    console.log('device command')
  }else if (command.option.type === 'group'){
    console.log('group command');
  }
};

module.exports = executeCommandCommand;