const assert = require('assert');
const getGroupManager = require('../src/getGroupManager');

describe('group manager', () => {
  it('add group', () => {
    const GroupManager = getGroupManager();
    GroupManager.addGroup('somegroup');
    const groups = GroupManager.getGroups();
    assert.equal(Object.keys(groups).length, 1);
  });
  it('can check if a group added exists', () => {
    const GroupManager = getGroupManager();
    GroupManager.addGroup('mygroup');
    assert.equal(GroupManager.groupExists('mygroup'), true);
  });
  it('add some device to a group', () => {
    const GroupManager = getGroupManager();
    GroupManager.addGroup('somegroup');
    GroupManager.addDeviceToGroup('somegroup','somedevice');
    const devices = GroupManager.getDevicesFromGroup('somegroup');
    assert.equal(true, devices.indexOf('somedevice') >= 0);
  });
  it('remove device belonging to that group', () => {
    const GroupManager = getGroupManager();
    GroupManager.addGroup('somegroup');
    GroupManager.addDeviceToGroup('somegroup','somedevice');
    GroupManager.removeDeviceFromGroup('somegroup', 'somedevice');
    const devices = GroupManager.getDevicesFromGroup('somegroup');
    assert.equal(true, devices.indexOf('somedevice') < 0);
  });
  it('removed device only from that group', () => {
    const GroupManager = getGroupManager();
    GroupManager.addGroup('somegroup');
    GroupManager.addGroup('anothergroup');
    GroupManager.addDeviceToGroup('somegroup','somedevice');
    GroupManager.addDeviceToGroup('anothergroup','somedevice');
    GroupManager.removeDeviceFromGroup('somegroup', 'somedevice');
    const devices = GroupManager.getDevicesFromGroup('anothergroup');
    assert.equal(true, devices.indexOf('somedevice') >= 0);
  });
  it('remove group', () => {
    const GroupManager = getGroupManager();
    GroupManager.addGroup('cool super awesome');
    GroupManager.removeGroup('cool super awesome');
    assert.equal(GroupManager.groupExists('cool super awesome'), false);
  });
});

