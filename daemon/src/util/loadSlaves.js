
const fs = require('fs');
const path = require('path');

const loadSlaves =  slaveFolder => {
  const filesNames = fs.readdirSync(slaveFolder);

  const slaveFileNames = filesNames.map(fileName => path.resolve(slaveFolder, fileName));
  const slaves = slaveFileNames.map(filename => require(filename));

  const slaveObject = { };
  slaves.forEach(slave => {
    slaveObject[slave.type] = slave;
  });

  return ({
    getSlaves:  () => slaveObject,
    loadSlave: slaveName => {
      throw (new Error('load slave not yet implemented'));
    },
    unloadSlave: slaveName => {
      throw (new Error('unload slave not yet implemented'));
    },
  });
};

module.exports = loadSlaves;