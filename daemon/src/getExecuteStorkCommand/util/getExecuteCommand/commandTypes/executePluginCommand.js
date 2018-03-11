

const executeAddPlugin = async (loadSlave, slaveName) => {
  loadSlave(slaveName);
  return 'add plugin: not yet implemented';
};
const executeRemovePlugin = async (unloadSlave, slaveName) => {
  unloadSlave(slaveName);
  return 'remove plugin: not yet implemented';
};

const executePluginCommand = async (command, loadSlave, unloadSlave) => {
  if (command.option.type === 'add'){
    console.log(command);
    return await executeAddPlugin(loadSlave, command.option.path);
  }else if (command.option.type === 'remove'){
    return await executeRemovePlugin(unloadSlave, command.option.path);
  }
};

module.exports = executePluginCommand;