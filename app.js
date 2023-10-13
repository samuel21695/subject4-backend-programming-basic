// load inner module
const http = require('http');
const fs = require('fs');
// load outer module
const html = require('./index.html');
// contentType
const contentType = {
  'Content-Type': 'text/html'
}

// create sercer
const server = http.createServer( (req, res) => {
  if(req.url === '/') {
    res.writeHead(200, contentType);
    
    // fs. readfile to load html file
    fs.readFile("./index.html", (err, data) => {
      if(err) {
        console.error('error has occured');
      } else {
        res.end(data)
      }
    })

  } else {
    res.writeHead(404, contentType);
    Response.end("error has occured");
  }
});

server.listen(3000, () => {
  console.log('server is working')
});