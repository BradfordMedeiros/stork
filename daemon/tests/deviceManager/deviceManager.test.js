const assert = require('assert');
const mockSlaves = require('./mocks/mockSlaves');
const getDeviceManager = require('../../src/getDeviceManager');


describe('device manager ', () => {
  it('add a device', () => {
    const DeviceManager = getDeviceManager(mockSlaves);  // valid reachability if number > 5
    DeviceManager.addDevice('mock_slave', '127');
    const devices = DeviceManager.getDevices();
    console.log(devices)
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
  it('add a couple more devices');
  it('remove a device');
  it('add group');
  it('add some device to a group');
  it('remove device belonging to that group');
  it('remove group');
});
