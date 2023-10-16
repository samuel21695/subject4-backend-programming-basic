// load inner module
const http = require('http');
const fs = require('fs');
// contentType
const contentType = {
  'Content-Type': 'text/html'
}

// create server
const server = http.createServer( (req, res) => {
  if(req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    
    // fs. readfile to load html file
    fs.readFile("./index.html", (err, data) => {
      if(err) {
        console.error('error has occured');
      } else {
        res.end(data)
      }
    })
  } else if (req.url === '/static/style.css') {
    res.writeHead(200, { 'Content-Type': 'text/css' });

    fs.readFile("./static/style.css", (err, data) => {
      if(err) {
        console.error('error has occured');
      } else {
        res.end(data)
      }
    })
  } else if (req.url === '/static/index.js') {
    res.writeHead(200, { 'Content-Type': 'application/javascript' });
    fs.readFile("./static/index.js", (err, data) => {
      if(err) {
        console.error('error has occured');
      } else {
        res.end(data)
      }
    })
  } else {
    res.writeHead(404);
    res.end('Not Found')
  }
});

server.listen(8080, () => {
  console.log('http://localhost:8080/')
}) 