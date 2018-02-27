const assert = require('assert');
const mockSlaves = require('./mocks/mockSlave');
const getDeviceManager = require('../src/util/managers/getDeviceManager');


describe('device manager', () => {
  it('add a device', () => {
    const DeviceManager = getDeviceManager(mockSlaves);  // valid reachability if number > 5
    DeviceManager.addDevice('mock_slave', '127');
    const devices = DeviceManager.getDevices();
    assert.equal(Object.keys(devices).length, 1);
  });
  it('remove a device', () => {
    const DeviceManager = getDeviceManager(mockSlaves);  // valid reachability if number > 5
    DeviceManager.addDevice('mock_slave', '127');
    const devices = DeviceManager.getDevices();
    const deviceKey = Object.keys(devices)[0];
    DeviceManager.removeDevice(deviceKey);
    const devicesWithDeviceRemoved = DeviceManager.getDevices();
    assert.equal(Object.keys(devicesWithDeviceRemoved).length, 0);
  });
  it('get devices returns a copy', () => {
    const DeviceManager = getDeviceManager(mockSlaves);  // valid reachability if number > 5
    DeviceManager.addDevice('mock_slave', '127');
    const devices = DeviceManager.getDevices();
    const devicesWithDeviceRemoved = DeviceManager.getDevices();
    assert.notEqual(devices, devicesWithDeviceRemoved);
  });
  it('adds only with valid reachability', () => {
    const DeviceManager = getDeviceManager(mockSlaves);  // valid reachability if number > 5
    let didError = false;
    try {
      DeviceManager.addDevice('mock_slave', '2');
    } catch (e) {
      didError = true;    // probably better to have a boolean check/ return value instead of this
    }
    assert.equal(didError, true);
  });
  it('can check if a device added exists', () => {
    const DeviceManager = getDeviceManager(mockSlaves);  // valid reachability if number > 5
    const id = DeviceManager.addDevice('mock_slave', '200');
    assert.equal(DeviceManager.deviceExists(id), true);
  });
  it('remove a device', () => {
    const DeviceManager = getDeviceManager(mockSlaves);  // valid reachability if number > 5
    const id = DeviceManager.addDevice('mock_slave', '200');
    DeviceManager.removeDevice(id);
    assert.equal(DeviceManager.deviceExists(id), false);
  });
});
