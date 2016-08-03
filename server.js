var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require("massive");

var db = massive.connectSync({
  db: 'massive_demo'
});

var app = express();
app.use(bodyParser.json());

var port = 3000;

// app.get('/incidents', function(req, res) {
//   console.log('POST sighting');
// });

app.get('/incidents', function(req, res) {
  db.get_all_incidents(function(err, injuries) {
    res.json(incidents);
  });
});

app.post('/incidents', function(req, res) {
  console.log('POST sighting');
});

app.listen(port, function() {
  console.log("Started server on port", port);
});
