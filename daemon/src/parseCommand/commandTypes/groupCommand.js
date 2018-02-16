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
    commander.a &&
    commander.r === undefined &&
    commander.d === undefined
  ){
      return ({
        isValid: true,
        type: 'group',
        option: {
          type: 'add_group',
          value: commander.add,
        }
      })
  }

  if (
    commander.l === undefined &&
    commander.a === undefined &&
    commander.r  &&
    commander.d === undefined
  ){
    return ({
      isValid: true,
      type: 'group',
      option: {
        type: 'remove_group',
        value: commander.remove,
      }
    })
  }

  if (
    commander.list === undefined &&
    commander.add &&
    commander.remove === undefined &&
    commander.device
  ){
    return ({
      isValid: true,
      type: 'group',
      option: {
        type: 'add_device',
        group: commander.add,
        device: commander.device,
      }
    })
  }

  if (
    commander.l === undefined &&
    commander.a === undefined &&
    commander.r  &&
    commander.d
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