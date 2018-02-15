
let value = 10;

const mockSlaves = {
  mock_slave: {
    type: 'mock_slave',
    get_value: () => value,
    isValidReachabilityInfo: identification => {
      return true;
    },
    status: async () => {
      return 'ok';
    },
    config: async configText => {
      value = value + 1;
      return;
    }
  }
};

module.exports = mockSlaves;