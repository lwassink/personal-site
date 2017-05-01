var express = require('express');
var path = require('path');
// var compression = require('compression');

var app = express();

app.use(express.static('public'));
// app.use(compression());

app.get(/^(?!\/assets)/, function (req, res, next) {
  console.log('request to: ' + req.path);
  res.sendFile(path.join(__dirname + '/src/index.html'));
});


const port = 80;

app.listen(port, function () {
  console.log('Listening on port ' + port + '...');
});
