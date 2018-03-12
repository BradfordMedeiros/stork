const minimist = require('minimist');

const getProgramOptions = args => {
  if (args === undefined){
    throw (new Error('args undefined in call to getProgramOptions'));
  }

  const commander = minimist(args);
  const mqttUrl = commander.m;
  if (mqttUrl === undefined){
    return ({
      mqttBroker: false,
      mqttUrl: null,
    })
  }else{
    if (typeof(mqttUrl) !== 'string'){
      throw (new Error('mqtt url not defined as string'));
    }
    return ({
      mqttBroker: true,
      mqttUrl,
    });
  }
};

module.exports = getProgramOptions;