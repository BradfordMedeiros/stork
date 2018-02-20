
const executeDeviceCommand = require('./commandTypes/executeDeviceCommand');
const executeGroupCommand = require('./commandTypes/executeGroupCommand');
const executeCommandCommand = require('./commandTypes/executeCommandCommand');

const executeWarnInvalidCommand = () => {
  console.error("Invalid command");
};

const commandTypeExecute = {
  device: ({ command, deviceManager }) => () => executeDeviceCommand(command, deviceManager),
  group: ({ command, groupManager }) => () => executeGroupCommand(command, groupManager),
  command: ({ command, commandManager }) => () => executeCommandCommand(command, commandManager),
};

const getExecuteCommand = ({ deviceManager, groupManager, commandManager }) => {
  if (deviceManager === undefined){
    throw (new Error('device manager not defined in getExecuteCommand'));
  }
  if (groupManager === undefined){
    throw (new Error('group manager not defined in getExecuteCommand'));
  }
  if (commandManager ===  undefined){
    throw (new Error('command manager not defined in getExecuteCommand'));
  }

  const executeCommand = commandObject => {
    if (commandObject.isValid !== true) {
      executeWarnInvalidCommand();
    } else {
      const runCommand = commandTypeExecute[commandObject.type]({
        command: commandObject,
        deviceManager,
        groupManager,
        commandManager,
      });
      if (executeCommand === undefined){
        throw (new Error('execute command not found for ' + commandObject.type));
      }
      runCommand();
    }
  };

  return executeCommand;
};



module.exports = getExecuteCommand;