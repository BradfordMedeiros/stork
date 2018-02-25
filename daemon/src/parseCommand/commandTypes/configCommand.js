const minimist = require('minimist');

const configCommand = args => {
  const commander = minimist(args);

  /*if (
    typeof(commander.d) === 'string' &&
    commander.g === undefined &&
    typeof(commander.c) === 'string' &&
    commander.l === undefined &&
    commander.t === undefined
  ){
    return ({
      isValid: true,
      type: 'command',
      option: {
        type: 'list_group',
        group: commander.g,
      }
    });
  }*/

  return ({
    isValid: false,
  });
};

module.exports = configCommand;