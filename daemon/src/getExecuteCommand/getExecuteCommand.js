
const executeList = require('./commandTypes/executeList');

const executeWarnInvalidCommand = () => {
  console.error("Invalid command");
};

const getExecuteCommand = deviceManager => {
  const executeCommand = commandObject => {
    if (commandObject.isValid !== true) {
      executeWarnInvalidCommand();
    } else {
      if (commandObject.type){

      }

    }
  };

  return executeCommand;
};



module.exports = getExecuteCommand;