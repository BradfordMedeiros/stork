const minimist = require('minimist');

const deviceCommand = args => {
  const commander = minimist(args);

  if (
    commander.l === true &&
    commander.a === undefined &&
    commander.d === undefined &&
    commander.r === undefined
  ){
    return ({
      isValid: true,
      type: 'device',
      option: {
        type: 'list',
      }
    });
  }

  if (
    commander.l === undefined &&
    commander.a &&
    commander.d ===  undefined &&
    commander.r &&
    commander.i === undefined
  ){
    return ({
      isValid: true,
      type: 'device',
      option: {
        type: 'add',
        name: commander.a,
        reach: commander.r,
      }
    })
  }

  if (
    commander.l === undefined &&
    commander.a === undefined &&
    commander.d &&
    commander.r === undefined
  ){
    return ({
      isValid: true,
      type: 'device',
      option: {
        type: 'delete',
        id: commander.d,
      }
    })
  }

  return ({
    isValid: false,
  });
};

module.exports = deviceCommand;