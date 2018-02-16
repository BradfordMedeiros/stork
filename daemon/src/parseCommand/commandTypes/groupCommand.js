const minimist = require('minimist');

const groupCommand = args => {
  const commander = minimist(args);

  if (
    commander.l === true &&
    commander.a === undefined &&
    commander.r === undefined &&
    commander.d === undefined
  ){
    return ({
      isValid: true,
      type: 'group',
      option: {
        type: 'list',
      }
    });
  }

  if (
    commander.l === undefined &&
    typeof(commander.a) === 'string' &&
    commander.r === undefined &&
    commander.d === undefined
  ){
      return ({
        isValid: true,
        type: 'group',
        option: {
          type: 'add_group',
          value: commander.a,
        }
      })
  }

  if (
    commander.l === undefined &&
    commander.a === undefined &&
    typeof(commander.r) === 'string'  &&
    commander.d === undefined
  ){
    return ({
      isValid: true,
      type: 'group',
      option: {
        type: 'remove_group',
        value: commander.r,
      }
    })
  }

  if (
    commander.l === undefined &&
    typeof(commander.a) === 'string' &&
    commander.r === undefined &&
    typeof(commander.d) === 'string'
  ){
    return ({
      isValid: true,
      type: 'group',
      option: {
        type: 'add_device',
        group: commander.a,
        device: commander.d,
      }
    })
  }

  if (
    commander.l === undefined &&
    commander.a === undefined &&
    typeof(commander.r) === 'string'  &&
    typeof(commander.d) === 'string'
  ){
    return ({
      isValid: true,
      type: 'group',
      option: {
        type: 'remove_device',
        group: commander.r,
        device: commander.d,
      }
    })
  }




  return ({
    isValid: false,
  });
};

module.exports = groupCommand;