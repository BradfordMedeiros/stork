const assert = require('assert');
const mockSlaves = require('./mocks/mockSlave');
const getDeviceManager = require('../src/util/managers/getDeviceManager');
const getStatusManager = require('../src/util/managers/getStatusManager');


describe('status manager', () => {
  it('get basic device statusr', async () => {
    const deviceManager = getDeviceManager(mockSlaves);  // valid reachability if number > 5
    const statusManager = getStatusManager({ deviceManager, slaves: mockSlaves });
    const deviceId = deviceManager.addDevice('mock_slave', '127');

    mockSlaves.mock_slave.change_status('test_status');
    const newStatus  = await statusManager.getDeviceStatus(deviceId);

    mockSlaves.mock_slave.change_status('new_status');
    const anotherStatus  = await statusManager.getDeviceStatus(deviceId);

    assert.equal(newStatus, 'test_status');
    assert.equal(anotherStatus, 'new_status');
  });
});
