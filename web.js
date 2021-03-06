var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {

  var fs = require('fs');
  var buffer = fs.readFileSync('index.html');

  response.send(buffer.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
