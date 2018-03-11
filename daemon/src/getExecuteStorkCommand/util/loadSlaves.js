
const fs = require('fs');
const path = require('path');

const loadSlaves =  slaveFolder => {
  console.log('slave loading: started');
  const filesNames = fs.readdirSync(slaveFolder);

  const slaveFileNames = filesNames.map(fileName => path.resolve(slaveFolder, fileName));
  const slaves = slaveFileNames.map(filename => require(filename));

  const slaveObject = { };
  slaves.forEach(slave => {
    console.log('slave loading: loaded: ', slave.type);
    slaveObject[slave.type] = slave;
  });
  console.log('slave loading: complete');

  return slaveObject;
};

module.exports = loadSlaves;