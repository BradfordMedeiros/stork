const commander = require('commander');

const groupCommand = args => {
  commander
    .option('-l, --list', 'list groups')
    .option('-a, --add [type]', 'add group or remove device from group')
    .option('-r, --remove [type]', 'remove group or remove device from group')
    .option('-d, --device [type]', 'add device to group')
    .parse(args);

  if (
    commander.list === true &&
    commander.add === undefined &&
    commander.remove === undefined &&
    commander.device === undefined
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
    commander.list === undefined &&
    commander.add &&
    commander.remove === undefined &&
    commander.device === undefined
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
    commander.list === undefined &&
    commander.add === undefined &&
    commander.remove  &&
    commander.device === undefined
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
    commander.list === undefined &&
    commander.add === undefined &&
    commander.remove  &&
    commander.device
  ){
    return ({
      isValid: true,
      type: 'group',
      option: {
        type: 'remove_device',
        group: commander.remove,
        device: commander.device,
      }
    })
  }




  return ({
    isValid: false,
  });
};

module.exports = groupCommand;