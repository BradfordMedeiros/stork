
let value = 10;

const mockSlave = {
  mock_slave: {
    type: 'another_slave',
    get_value: () => value,
    isValidReachabilityInfo: identification => {
      return (Number(identification) > 5);
    },
    isValidConfig:  () => {
      return true;
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