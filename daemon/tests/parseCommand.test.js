const assert = require('assert');
const parseCommand = require('../src/parseCommand/parseCommand');

describe('expression parsing -- device commands', () => {
  it('device list command', () => {
    const expected = {
      isValid: true,
      type: 'device',
      option: {
        type: 'list'
      }
    };
    assert.deepEqual(parseCommand('stork device -l'), expected);
  });
  it('device add command', () => {
    const expected = {
      isValid: true,
      type: 'device',
      option: {
        type: 'add',
        name: 'testdevice',
        reach: '127.0.0.1',
      }
    };
    assert.deepEqual(parseCommand('stork device -a testdevice -r 127.0.0.1'),expected);
  });
  it('device remove command', () => {
    const expected = {
      isValid: true,
      type: 'device',
      option: {
        type: 'delete',
        id: 'testdevice',
      }
    };

    assert.deepEqual(parseCommand('stork device -d testdevice'), expected);
  });
});

describe('expression parsing -- group commands', () => {
  it('group list command', () => {
    const expected = {
      isValid: true,
      type: 'group',
      option: {
        type: 'list'
      }
    };
    assert.deepEqual(parseCommand('stork group -l'), expected);
  });
  it('group add command', () => {
    const expected = {
      isValid: true,
      type: 'group',
      option: {
        type: 'add_group',
        value: 'somegroup',
      }
    };
    assert.deepEqual(parseCommand('stork group -a somegroup'),expected);
  });
  it('group remove command', () => {
    const expected = {
      isValid: true,
      type: 'group',
      option: {
        type: 'remove_group',
        value: 'anothergroup',
      }
    };
    assert.deepEqual(parseCommand('stork group -r anothergroup'), expected);
  });
  it('group add device', () => {
    const expected = {
      isValid: true,
      type: 'group',
      option: {
        type: 'add_device',
        group: 'acoolgroup',
        device: 'somecooldevice',
      }
    };
    assert.deepEqual(parseCommand('stork group -a acoolgroup -d somecooldevice'), expected);
  });
  it('group remove device', () => {
    const expected = {
      isValid: true,
      type: 'group',
      option: {
        type: 'remove_device',
        group: 'acoolgroup',
        device: 'somecooldevice',
      }
    };
    assert.deepEqual(parseCommand('stork group -r acoolgroup -d somecooldevice'), expected);
  });
});

describe('expression parsing -- command commands', () => {
  it ('list available commands for a device', () => {
    const expected = {
      isValid: true,
      type: 'command',
      option:  {
        type: 'list_device',
        device: 'some_device_id'
      }
    };
    assert.deepEqual(parseCommand('stork command -l -d some_device_id'),expected);
  });

  it ('list available commands for a device by type', () => {
    const expected = {
      isValid: true,
      type: 'command',
      option:  {
        type: 'list_by_type',
        device: 'test_type'
      }
    };
    assert.deepEqual(parseCommand('stork command -l -t test_type'),expected);
  });
  it('list available commands for a group');
  it('execute command for a device', () => {
    const expected = {
      isValid: true,
      type: 'command',
      option: {
        type: 'device',
        deviceId: 'some_device_id',
        command: 'some_command',
      }
    };
    assert.deepEqual(parseCommand('stork command -d some_device_id -c some_command'),expected);
  });
  it('execute command for a group', () => {
    const expected = {
      isValid: true,
      type: 'command',
      option: {
        type: 'group',
        command: 'some_command',
        group: 'some_group_name',
      }
    };
    assert.deepEqual(parseCommand('stork command -g some_group_name -c some_command'),expected);
  });
});

describe('expression parsing -- config commands',  () => {
  it('config device command');
  it('config group command');
});

describe('expression parsing -- status command', () => {
  it('get status for device');
  it('get status for group');
});

describe('expression parsing -- validate config', () => {
  it('validate config for device');
  it('validate config for group');
  it('validate config by text');
  it('validate config by file');
});

describe('expression parsing -- invalid commands', () => {
  it('invalid command 1');
});
