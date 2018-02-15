const assert = require('assert');

describe('expression parsing device commands', () => {
  it('device list command');
  it('device add command');
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
