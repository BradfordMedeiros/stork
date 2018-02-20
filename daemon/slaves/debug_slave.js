
const debugSlave = {
  type: 'debug',
  isValidReachabilityInfo: identification => {
    return typeof(identification) === 'string';
  },
  status: async () => {
    await (new Promise((resolve, reject)=> {
      resolve();
    }));
    return "ok";
  },
  config: async configText => {
    await (new Promise((resolve, reject)=> {
      resolve();
    }));
    return {
      success: true,
    };
  },
  commands: {

  },
};

module.exports = debugSlave;