const minimist = require('minimist');

const configCommand = args => {
  const commander = minimist(args);

  if (
    typeof(commander.d) === 'string' &&
    commander.g === undefined &&
    typeof(commander.c) === 'string' &&
    commander.f === undefined
  ){
    return ({
      isValid: true,
      type: 'config',
      option: {
        type: 'config_device_by_text',
        device: commander.d,
        config: commander.c,
      }
    });
  }else if(
    typeof(commander.d) === 'string' &&
    commander.g === undefined &&
    commander.c === undefined &&
    typeof(commander.f) === 'string'
  ) {
    return ({
      isValid: true,
      type: 'config',
      option: {
        type: 'config_device_by_file',
        device: commander.d,
        file: commander.f,
      }
    });
  }

  return ({
    isValid: false,
  });
};

module.exports = configCommand;