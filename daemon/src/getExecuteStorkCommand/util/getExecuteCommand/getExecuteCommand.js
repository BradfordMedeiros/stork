
const executeDeviceCommand = require('./commandTypes/executeDeviceCommand');
const executeGroupCommand = require('./commandTypes/executeGroupCommand');
const executeCommandCommand = require('./commandTypes/executeCommandCommand');
const executeConfigCommand = require('./commandTypes/executeConfigCommand');
const executeValidateConfigCommand = require('./commandTypes/executeValidateConfigCommand');
const executeStatusCommand = require('./commandTypes/executeStatusCommand');

const executeWarnInvalidCommand = () => 'Invalid command';

const commandTypeExecute = {
  'device' : ({ command, deviceManager }) => () => executeDeviceCommand(command, deviceManager),
  'group' : ({ command, groupManager }) => () => executeGroupCommand(command, groupManager),
  'command' : ({ command, commandManager }) => () => executeCommandCommand(command, commandManager),
  'config' : ({ command, configManager }) => () => executeConfigCommand(command, configManager),
  'validate-config' : ({ command, configManager }) => () => executeValidateConfigCommand(command, configManager),
  'status' : ({ command, statusManager }) => () => executeStatusCommand(command, statusManager),
};

const getExecuteCommand = ({ deviceManager, groupManager, commandManager, configManager, statusManager }) => {
  if (deviceManager === undefined){
    throw (new Error('device manager not defined in getExecuteCommand'));
  }
  if (groupManager === undefined){
    throw (new Error('group manager not defined in getExecuteCommand'));
  }
  if (commandManager ===  undefined){
    throw (new Error('command manager not defined in getExecuteCommand'));
  }
  if (configManager === undefined){
    throw (new Error('config manager not defined in getExecuteCommand'));
  }
  if (statusManager === undefined){
    throw (new Error('status manager not defined in getExecuteCommand'));
  }

  const executeCommand = async commandObject => {
    if (commandObject.isValid !== true) {
      return executeWarnInvalidCommand();
    } else {

      console.log(commandObject)
      const runCommand = commandTypeExecute[commandObject.type]({
        command: commandObject,
        deviceManager,
        groupManager,
        commandManager,
        configManager,
        statusManager,
      });
      if (executeCommand === undefined){
        throw (new Error('execute command not found for ' + commandObject.type));
      }
      return await runCommand();
    }
  };

  return executeCommand;
};



module.exports = getExecuteCommand;