const assert = require('assert');
const mockSlaves = require('./mocks/mockSlave');
const getDeviceManager = require('../src/getDeviceManager');
const getConfigManager = require('../src/getConfigManager');

describe('config manager', () => {
  it('can determine if a configuration is valid for a device type', () => {
    const deviceManager = getDeviceManager(mockSlaves);
    const configManager = getConfigManager({ deviceManager, slaves: mockSlaves });

    // mock slave needs json object, and just checks for somefield to be defined
    assert.equal(true, configManager.isValidDeviceConfiguration('mock_slave', '{ "somefield": true }'));
    assert.equal(false, configManager.isValidDeviceConfiguration('mock_slave', 'invalid config'));
  });
  it('can configure a device', async () => {
    const deviceManager = getDeviceManager(mockSlaves);
    const configManager = getConfigManager({ deviceManager, slaves: mockSlaves });
    const deviceId = deviceManager.addDevice('mock_slave', '500');

    let hasErrored = false;
    try{
      await configManager.configureDevice(deviceId, '{ "somefield" : true }')
    }catch(e){
      hasErrored = true;
    }
    assert.equal(hasErrored, false);
  });
  it('will fail to configure a device is the config is invalid', async () => {
    const deviceManager = getDeviceManager(mockSlaves);
    const configManager = getConfigManager({ deviceManager, slaves: mockSlaves });
    const deviceId = deviceManager.addDevice('mock_slave', '500');

    let hasErrored = false;
    try{
      await configManager.configureDevice(deviceId, 'invalid configuration')
    }catch(e){
      hasErrored = true;
    }
    assert.equal(hasErrored, true);
  });
});
