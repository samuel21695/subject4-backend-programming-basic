// load inner module
const http = require('http');
const fs = require('fs');
// contentType
const contentType = {
  'Content-Type': 'text/html'
}
const path = require('path');

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
  } else if (req.url === '/style/newStyle.css') {
    res.writeHead(200, { 'Content-Type': 'text/css' });

    fs.readFile("./style/newStyle.css", (err, data) => {
      if(err) {
        console.error('error has occured');
      } else {
        res.end(data)
      }
    })
  } else if (req.url.startsWith('/img/')) {
    res.writeHead(200, { 'Content-Type': 'image/png' });
    let imgName = path.basename(req.url);
    let imgPath = './img/' + imgName; 
    fs.readFile(imgPath, (err, data) => {
      if(err) {
        console.error('error has occured');
      } else {
        res.end(data)
      }
    })
  } else if (req.url === '/js/index.js') {
    res.writeHead(200, { 'Content-Type': 'application/javascript' });
    fs.readFile("./js/index.js", (err, data) => {
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