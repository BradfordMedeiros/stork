

const executeCommand = require('./src/executeStorkCommand');
//executeCommand(commandString);

const http = require('http');
const server = http.createServer((req, res) => {

  let body = '';
  req.on('data', function (data) {
    body += data;
    console.log("Partial body: " + body);
  });
  req.on('end', function () {
    console.log("Body: " + body);
    executeCommand(body);
    res.write(body);
    res.end();
  });
});

server.listen(8000);
