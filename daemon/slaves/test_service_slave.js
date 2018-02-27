const fetch = require('isomorphic-fetch');

const testServiceSlave = {
  type: 'test_service',
  isValidReachabilityInfo: identification => {
    return typeof(identification) === 'string';
  },
  isValidConfig:  (config) => {
    const isNumber = Number.isInteger(Number(config));
    return isNumber === false;
  },
  status: async () => {
    const data = await fetch('http://localhost:3000/status');
    return await data.text();
  },
  config: async configText => {
    return await fetch('http://localhost:3000/config', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({
        config: 2304,
      })
    });
  },
  commands: {
    test: async () => 'ok',
  },
};

module.exports = testServiceSlave;