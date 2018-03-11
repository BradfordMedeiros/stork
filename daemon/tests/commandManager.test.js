const assert = require('assert');
const mockSlaves = require('./mocks/mockSlave');
const getDeviceManager = require('../src/getExecuteStorkCommand/util/managers/getDeviceManager');
const getGroupManager = require('../src/getExecuteStorkCommand/util/managers/getGroupManager');
const getCommandManager = require('../src/getExecuteStorkCommand/util/managers/getCommandManager');

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

  it('execute command for a device', async () => {
    const deviceManager = getDeviceManager(mockSlaves);
    const groupManager = getGroupManager();
    const commandManager = getCommandManager({ deviceManager, groupManager, slaves: mockSlaves });

    const deviceId = deviceManager.addDevice('mock_slave', '343');

    const value = await commandManager.executeCommandForDevice(deviceId, 'test');
    assert.equal(value, 'ok');
  });
  it('execute command for a group');

});
