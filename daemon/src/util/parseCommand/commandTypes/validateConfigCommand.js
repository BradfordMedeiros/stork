const minimist = require('minimist');

const validateConfigCommand = args => {
  console.log('validate config --');
  const commander = minimist(args);

  if (
    typeof(commander.d) === 'string' &&
    commander.g === undefined &&
    commander.c &&
    commander.f === undefined
  ){
    return ({
      isValid: true,
      type: 'validate-config',
      option: {
        type: 'config_device_by_text',
        device: commander.d,
        config: String(commander.c),
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
      type: 'validate-config',
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

module.exports = validateConfigCommand;