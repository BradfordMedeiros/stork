const minimist = require('minimist');

const commandCommand = args => {
  console.log("parsing command command----------");
  const commander = minimist(args);

  if (
    typeof(commander.d) === 'string' &&
    commander.g === undefined &&
    typeof(commander.c) === 'string'
  ){
    return ({
      isValid: true,
      type: 'command',
      option: {
        type: 'device',
        command: commander.c,
      }
    })
  }else if (
    commander.d === undefined &&
    typeof(commander.g) === 'string' &&
    typeof(commander.c) === 'string'
  ){
      return ({
        isValid: true,
        type: 'command',
        option: {
          type: 'group',
          command: commander.c,
        }
      });
  }

  return ({
    isValid: false,
  });
};

module.exports = commandCommand;