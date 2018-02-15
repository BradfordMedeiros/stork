const commander = require('commander');

const deviceCommand = args => {
  commander
    .option('-l, --list', 'list devices')
    .option('-a, --add [type]', 'add device')
    .option('-r, --delete [type]', 'remove device')
    .option('-i, --reach [type]', 'reachability info for device')
    .parse(args);

  if (
    commander.list === true &&
    commander.add === undefined &&
    commander.delete === undefined &&
    commander.reach === undefined
  ){
    return ({
      isValid: true,
      type: 'device',
      option: {
        type: 'list',
      }
    });
  }

  console.log('command.list: ', commander.list);
  if (
    commander.list === undefined &&
    commander.add &&
    commander.delete ===  undefined &&
    commander.reach &&
    commander.id === undefined
  ){
    return ({
      isValid: true,
      type: 'device',
      option: {
        type: 'add',
        name: commander.add,
        reach: commander.reach,
      }
    })
  }

  if (
    commander.list === undefined &&
    commander.add === undefined &&
    commander.delete &&
    commander.reach === undefined
  ){
    return ({
      isValid: true,
      type: 'device',
      option: {
        type: 'delete',
        id: commander.delete,
      }
    })
  }

  return ({
    isValid: false,
  });
};

module.exports = deviceCommand;