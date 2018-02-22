const minimist = require('minimist');

const commandCommand = args => {
  const commander = minimist(args);

  if (
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
        type: 'device',
        command: commander.c,
      }
    })
  }else if(
    typeof(commander.d) === 'string' &&
    commander.g === undefined &&
    commander.c === undefined &&
    commander.l &&
    commander.t === undefined
  ){
    return ({
      isValid: true,
      type: 'command',
      option:  {
        type: 'list_device',
        device: commander.d
      }
    });
  }
  else if(
    commander.d === undefined &&
    commander.g === undefined &&
    commander.c === undefined &&
    commander.l &&
    typeof(commander.t) === 'string'
  ){
    return ({
      isValid: true,
      type: 'command',
      option:  {
        type: 'list_by_type',
        device: commander.t
      }
    });
  }
  else if (
    commander.d === undefined &&
    typeof(commander.g) === 'string' &&
    typeof(commander.c) === 'string' &&
    commander.l  === undefined &&
    commander.t === undefined
  ){
      return ({
        isValid: true,
        type: 'command',
        option: {
          type: 'group',
          command: commander.c,
        }
      });
  }else if(
    commander.d === undefined &&
    typeof(commander.g) === 'string' &&
    commander.c === undefined &&
    commander.l &&
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
  }

  return ({
    isValid: false,
  });
};

module.exports = commandCommand;