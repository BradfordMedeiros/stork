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
  it('add some device to a group');
  it('remove device belonging to that group');
  it('remove group', () => {
    const GroupManager = getGroupManager();
    GroupManager.addGroup('cool super awesome');
    GroupManager.removeGroup('cool super awesome');
    assert.equal(GroupManager.groupExists('cool super awesome'), false);
  });
});

