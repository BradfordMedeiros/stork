
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

  return ({
    getSlaves:  () => slaveObject,
    loadSlave: slaveName => new Promise((resolve, reject) => {
      const pathObject = path.resolve(slaveName);
      if (slaveName !== pathObject){
        reject('slave name must be absolute path');
        return;
      }

      const slaveFilename = path.basename(pathObject);
      const fileToMoveTo = path.resolve(slaveFolder, slaveFilename);

      fs.access(fileToMoveTo, err => {
        if (!err) {
          reject('file already exists');
          return;
        }
        fs.copyFile(pathObject, fileToMoveTo, err => {
          if (err) {
            reject('error copying file');
            return;
          }
          const slave = require(fileToMoveTo);
          slaveObject[slave.type] = slave;
          resolve();
        })
      })
    }),

    unloadSlave: slaveName => new Promise((resolve, reject) => {
      console.log('slave name is: ', slaveName)
      // there will still be including any dependencies loaded of this, but nbd since i'm ok with keeping that in memory since
      // it's just standard includes (unless it's overloaded, then assume know what they're doing, nbd)
      const slaveFileName = path.resolve(slaveFolder, slaveName);
      const slaveType= require(slaveFileName).type;
      fs.unlink(slaveFileName, err => {
        if (err){
          reject(err);
          return;
        }
        delete slaves[slaveType];
        delete require.cache[require.resolve(slaveFileName)];
        resolve();
      })
    })
  });
};

module.exports = loadSlaves;