
/*
 stork list

 stork status

 stork devices ls
 stork device status

 stork device <device id> ls
 stork config <some config>

 */

const process = require('process');

const deviceCommand = require('./commandTypes/deviceCommand');
const groupCommand = require('./commandTypes/groupCommand');
const commandCommand = require('./commandTypes/commandCommand');
const configCommand = require('./commandTypes/configCommand');

const invalidCommand = () => ({
  isValid: false,
});

const commands = {
  device: deviceCommand,
  group: groupCommand,
  command: commandCommand,
  config: configCommand,
};

const parseCommand = commandString => {
  const args = commandString.split(' ');

  const commandType = args[1];
  const generateCommand = commands[commandType];
  if (generateCommand === undefined){
    return invalidCommand();
  }
  return generateCommand(args);

};

module.exports = parseCommand;