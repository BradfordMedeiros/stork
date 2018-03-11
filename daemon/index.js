

const executeCommand = require('./src/getExecuteStorkCommand');
//getExecuteStorkCommand(commandString);

const http = require('http');
const server = http.createServer((req, res) => {

  let body = '';
  req.on('data', function (data) {
    body += data;
    console.log("Partial body: " + body);
  });
  req.on('end', async () => {
    const response = await executeCommand(body);
    console.log('response: ', response);
    res.write(response + '\n');
    res.end();
  });
});

server.listen(8000);
