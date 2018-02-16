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
