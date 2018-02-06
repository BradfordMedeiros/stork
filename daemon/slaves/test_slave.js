
const testSlave = {
  name: 'test_slave',
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
};

module.exports = testSlave;