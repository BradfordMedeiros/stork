

const executeCommand = require('./executeCommand');

const commandString = process.argv.slice(1).join(' ');
executeCommand(commandString);


