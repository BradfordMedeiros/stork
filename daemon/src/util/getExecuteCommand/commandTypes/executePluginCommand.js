

const executeAddPlugin = async loadSlave => {
  loadSlave();
  return 'add plugin: not yet implemented';
};
const executeRemovePlugin = async unloadSlave => {
  unloadSlave();
  return 'remove plugin: not yet implemented';
};

const executePluginCommand = async (command, loadSlave, unloadSlave) => {
  if (command.option.type === 'add'){
    return await executeAddPlugin(loadSlave);
  }else if (command.option.type === 'remove'){
    return await executeRemovePlugin(unloadSlave);
  }
};

module.exports = executePluginCommand;