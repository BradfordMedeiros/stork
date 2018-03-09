

const executeAddPlugin = async () => {
  return 'add plugin: not yet implemented';
};
const executeRemovePlugin = async () => {
  return 'remove plugin: not yet implemented';
};

const executePluginCommand = async (command) => {
  if (command.option.type === 'add'){
    return await executeAddPlugin();
  }else if (command.option.type === 'remove'){
    return await executeRemovePlugin();
  }
};

module.exports = executePluginCommand;