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
    typeof(commander.a) === 'string' &&
    commander.d ===  undefined &&
    typeof(commander.r) === 'string' &&
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
    typeof(commander.d) === 'string' &&
    commander.r === undefined &&
    commander.i === undefined
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