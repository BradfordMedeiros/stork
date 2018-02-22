
let value = 10;

const mockSlave = {
  mock_slave: {
    type: 'mock_slave',
    get_value: () => value,
    isValidReachabilityInfo: identification => {
      return (Number(identification) > 5);
    },
    status: async () => {
      return 'ok';
    },
    config: async configText => {
      value = value + 1;
      return;
    },
    commands:  {
      test: async () => {
        return "ok";
      }
    },
  }
};

module.exports = mockSlave;