
let value = 10;
let status = 'ok';

const mockSlave = {
  mock_slave: {
    type: 'mock_slave',
    get_value: () => value,
    change_status: newStatus => {
      status = newStatus;
    },
    isValidReachabilityInfo: identification => {
      return (Number(identification) > 5);
    },
    isValidConfig:  config => {
      try {
        const data = JSON.parse(config);
        return (data.somefield === true || data.somefield == false);
      }catch(e){
        return false;
      }
    },
    status: async () => {
      return status;
    },
    config: async configText => {
      value = value + 1;
      return;
    },
    commands:  {
      test: async () => "ok",
    },
  }
};

module.exports = mockSlave;