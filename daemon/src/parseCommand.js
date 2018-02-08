
/*
 stork list

 stork status

 stork devices ls
 stork device status

 stork device <device id> ls
 stork config <some config>

 */

const getDeviceOptions = commandString => commandString.split(' ')[2];

const commands = {
  list: {
    check: commandString => {
      const tokens = commandString.split(' ');
      return tokens.length === 2 && tokens[1] === 'list';
    },
    generate: commandString => ({
      type: 'list'
    }),
  },
  device: {
    check: commandString => {
      const tokens = commandString.split(' ');
      return (tokens.length === 2 || tokens.length === 3) & tokens[1] === 'device';
    },
    generate: commandString => ({
      type: 'device',
      options: getDeviceOptions(commandString),
    }),
  }
};

const generateCommandObject = (isValid, commandObject) => ({
  isValid,
  command: commandObject,
});

const parseCommand = commandString => {
  const commandKey = Object.keys(commands).find(commandKey => commands[commandKey].check(commandString));
  if (commandKey === undefined){
    return generateCommandObject(false);
  }else{
    return generateCommandObject(true, commands[commandKey].generate(commandString));
  }
};

module.exports = parseCommand;