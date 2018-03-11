
const fs = require('fs');
const path = require('path');

const loadSlaves =  slaveFolder => {
  console.log('started load');
  const filesNames = fs.readdirSync(slaveFolder);

  const slaveFileNames = filesNames.map(fileName => path.resolve(slaveFolder, fileName));
  const slaves = slaveFileNames.map(filename => require(filename));

  const slaveObject = { };
  slaves.forEach(slave => {
    console.log('loaded: ', slave.type);
    slaveObject[slave.type] = slave;
  });
  console.log('load complete');

  return slaveObject;
};

module.exports = loadSlaves;