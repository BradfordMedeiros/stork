const assert = require('assert');
const parseCommand = require('../src/parseCommand/parseCommand');

describe('expression parsing device commands', () => {
  it('device list command', () => {
    const expected = {
      isValid: true,
      type: 'device',
      option: {
        type: 'list'
      }
    };
    assert.deepEqual(parseCommand('stork device -l'), expected);
    assert.deepEqual(parseCommand('stork device --list'), expected);
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
    assert.deepEqual(parseCommand('stork device --add testdevice --reach 127.0.0.1'),expected);
  });
  it('device remove command');
});

describe('expression parsing group commands', () => {
  it('group list command');
  it('group add command');
  it('group remove command');
});

describe('expression parsing config commands',  () => {
  it('config device command');
  it('config group command');
});

describe('expression parsing status command', () => {
  it('get status for device');
  it('get status for group');
});

describe('expression parsing validate config', () => {
  it('validate config for device');
  it('validate config for group');
  it('validate config by text');
  it('validate config by file');
});

describe('expression parsing invalid commands', () => {
  it('invalid command 1');
});
