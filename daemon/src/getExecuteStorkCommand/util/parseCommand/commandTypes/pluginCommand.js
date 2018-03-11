const minimist = require('minimist');

// -a (add) or -r (remove)
// -f force (with remove)
const pluginCommand = args => {
  const commander = minimist(args);

  if (
    typeof(commander.a) === 'string' &&
    commander.r === undefined
  ){
    return ({
      isValid: true,
      type: 'plugin',
      option: {
        type: 'add',
        path: commander.a,
      }
    });
  }else if (
    commander.a === undefined &&
    typeof(commander.r) === 'string'
  ){
    return ({
      isValid: true,
      type: 'plugin',
      option: {
        type: 'remove',
        path: commander.r,
      }
    });
  }

  return ({
    isValid: false,
  });
};

module.exports = pluginCommand;