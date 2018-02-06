
const fs = require('fs');
const path = require('path');

const loadSlaves = async slaveFolder => {
  const loadSlavesPromise = new Promise((resolve, reject) => {
    fs.readdir(slaveFolder, (err, fileNames) => {
      if (err){
        reject(err);
      }else {
        resolve(fileNames);
      }
    });
  });

  const slaveFileNames = (await loadSlavesPromise).map(fileName => path.resolve(slaveFolder, fileName));
  const slaves = slaveFileNames.map(filename => require(filename));

  const slaveObject = { };
  slaves.forEach(slave => {
    slaveObject[slave.name] = slave;
  });

  return slaveObject;
};

module.exports = loadSlaves;