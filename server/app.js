const http = require('http');
const port = 4000;
const fs = require('fs')

const server = http.createServer((req, res) => {
  res.writeHead(200);
  fs.readFile('hacks.js', (error, data) => {
    if (error) {
      res.writeHead(404)
      res.write('Error: File not found..');
    } else {
      res.write(data);
    }
    res.end();
  })
});

server.listen(port, (error) => {
  if (error) {
    console.log('Something went wrong...', error);
  } else {
    console.log(`Server is listening on port ${port}`);
  }
})
