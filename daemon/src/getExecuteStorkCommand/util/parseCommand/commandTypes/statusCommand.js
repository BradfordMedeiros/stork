const minimist = require('minimist');

const statusCommand = args => {
  const commander = minimist(args);

  if (
    typeof(commander.d) === 'string' &&
    commander.g === undefined
  ){
    return ({
      isValid: true,
      type: 'status',
      option: {
        type: 'device_status',
        device: commander.d,
      }
    });
  }else if (
    commander.d === undefined &&
    typeof(commander.g) === 'string'
  ){
    return ({
      isValid: true,
      type: 'status',
      option: {
        type: 'group_status',
        group: commander.g,
      }
    });
  }

  return ({
    isValid: false,
  });
};

module.exports = statusCommand;