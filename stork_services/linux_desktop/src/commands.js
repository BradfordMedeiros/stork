
const child_process = require('child_process');
const notifier = require('node-notifier');

const commands = {
  tryOpen: path => {
    if (path.indexOf("'") !== -1){
      return;
    }
    const command = `xdg-open '${path}'`;
    console.log('command: ',  command);
    child_process.exec(command)
  },
  notify: message => {
    notifier.notify({
      title: 'Automate notification',
      message,
    });
  }
};

module.exports = commands;