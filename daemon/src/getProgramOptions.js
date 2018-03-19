const minimist = require('minimist');

const getProgramOptions = args => {
  if (args === undefined){
    throw (new Error('args undefined in call to getProgramOptions'));
  }

  const commander = minimist(args);
  const mqttUrl = commander.m;
  const pluginFolder = commander.p;

  if (mqttUrl === undefined){
    return ({
      mqttBroker: false,
      mqttUrl: null,
      pluginFolder,
    })
  }else{
    if (typeof(mqttUrl) !== 'string'){
      throw (new Error('mqtt url not defined as string'));
    }
    return ({
      mqttBroker: true,
      mqttUrl,
      pluginFolder,
    });
  }
};

module.exports = getProgramOptions;