const assert = require('assert');
const getGroupManager = require('../src/getGroupManager');

const GroupManager = getGroupManager();


describe('device manager -- groups', () => {
  it('add group', () => {
    const GroupManager = getGroupManager();  // valid reachability if number > 5
    GroupManager.addGroup('somegroup');
    const groups = GroupManager.getGroups();
    assert.equal(Object.keys(groups).length, 1);
  });
  it('add some device to a group');
  it('remove device belonging to that group');
  it('remove group');
});

