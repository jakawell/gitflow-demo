const express = require('express');
const app = express();

app.get('/', function (request, response) {
  response.send('Hello World!');
});

app.get('/samford', function (req, res) {
  res.send('Go Bulldogs!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
