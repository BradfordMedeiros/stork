

const executeCommand = require('./src/executeStorkCommand');

const commandString = process.argv.slice(1).join(' ');
executeCommand(commandString);


