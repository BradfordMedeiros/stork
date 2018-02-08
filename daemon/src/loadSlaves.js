
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

  return slaveObject;
};

module.exports = loadSlaves;