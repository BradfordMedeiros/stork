const assert = require('assert');
const parseCommand = require('../src/util/parseCommand/parseCommand');

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
  it('list available commands for a group', () => {
    const expected = {
      isValid: true,
      type: 'command',
      option: {
        type: 'list_group',
        group: 'some_group',
      }
    };
    assert.deepEqual(parseCommand('stork command -g some_group -l'),expected);
  });
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
  it('config device command by text', () => {
    const expected = {
      isValid: true,
      type: 'config',
      option: {
        type: 'config_device_by_text',
        device: 'some_device_id',
        config: 'some_config_data',
      }
    };
    assert.deepEqual(parseCommand('stork config -d some_device_id -c some_config_data'), expected);
  });
  it('config device by file', () => {
    const expected = {
      isValid: true,
      type: 'config',
      option: {
        type: 'config_device_by_file',
        device: 'some_device_id',
        file: 'some_config_file',
      }
    };
    assert.deepEqual(parseCommand('stork config -d some_device_id -f some_config_file'), expected);
  });
  it('config group command by text');
  it('config group by file');
});

describe('expression parsing -- status command', () => {
  it('get status for device');
  it('get status for group');
});

describe('expression parsing -- validate config', () => {
  it('validate config for device', () => {
    const expected = {
      isValid: true,
      type: 'validate-config',
      option: {
        type: 'config_device_by_text',
        device: 'some_device_id',
        config: 'some_config_text',
      }
    };

    assert.deepEqual(parseCommand('stork validate-config -d some_device_id -c some_config_text'), expected);
  });
  it('validate config for device by file', () => {
    const expected = {
      isValid: true,
      type: 'validate-config',
      option: {
        type: 'config_device_by_file',
        device: 'some_device_id',
        file: 'some_config_file',
      }
    };

    assert.deepEqual(parseCommand('stork validate-config -d some_device_id -f some_config_file'), expected);
  });
  it('validate config for group by text');
  it('validate config for group by file');
});


describe ('expression parsing -- plugins', () => {
  it('add a plugin', () => {
    const expected = {
      isValid: true,
      type: 'plugin',
      option: {
        type: 'add',
        path: './somefile',
      }
    };

    assert.deepEqual(parseCommand('stork plugin -a ./somefile'), expected);
  });
  it('remove a plugin', () => {
    const expected = {
      isValid: true,
      type: 'plugin',
      option: {
        type: 'remove',
        path: './somefile',
      }
    };

    assert.deepEqual(parseCommand('stork plugin -r ./somefile'), expected);
  });
  it('force remove plugin option');
});

describe('expression parsing -- invalid commands', () => {
  it('invalid command 1');
});
