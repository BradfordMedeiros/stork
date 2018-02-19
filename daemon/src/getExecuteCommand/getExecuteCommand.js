
const executeDeviceCommand = require('./commandTypes/executeDeviceCommand');

const executeWarnInvalidCommand = () => {
  console.error("Invalid command");
};

const commandTypeExecute = {
  device: ({ command, deviceManager }) => () => executeDeviceCommand(command, deviceManager),
};

const getExecuteCommand = deviceManager => {
  if (deviceManager === undefined){
    throw (new Error('device manager not defined in getExecuteCommand'));
  }

  const executeCommand = commandObject => {
    if (commandObject.isValid !== true) {
      executeWarnInvalidCommand();
    } else {
      const runCommand = commandTypeExecute[commandObject.type]({ command: commandObject, deviceManager });
      if (executeCommand === undefined){
        throw (new Error('execute command not found for ' + commandObject.type));
      }
      runCommand();
    }
  };

  return executeCommand;
};



module.exports = getExecuteCommand;