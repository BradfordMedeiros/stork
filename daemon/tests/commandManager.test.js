const assert = require('assert');
const mockSlaves = require('./mocks/mockSlave');
const getDeviceManager = require('../src/getDeviceManager');
const getGroupManager = require('../src/getGroupManager');
const getCommandManager = require('../src/getCommandManager');

describe('command manager', () => {
  it('list commands for a device by id', () => {
    const deviceManager = getDeviceManager(mockSlaves);
    const groupManager = getGroupManager();
    const commandManager = getCommandManager({ deviceManager, groupManager, slaves: mockSlaves });

    const deviceId = deviceManager.addDevice('mock_slave', '343');
    const commands = commandManager.listCommandsForDeviceById(deviceId);
    assert.deepEqual(commands, ['test']);
  });
  it('list commands for a device by device type', () => {
    const deviceManager = getDeviceManager(mockSlaves);
    const groupManager = getGroupManager();
    const commandManager = getCommandManager({ deviceManager, groupManager, slaves: mockSlaves });

    const commands = commandManager.listCommandsForDeviceByDeviceType('mock_slave');
    assert.deepEqual(commands, ['test']);
  });

  it('list commands for a group for a single device type');
  it('list commands for a group for a multiple device types');

});
