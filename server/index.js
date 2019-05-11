const express = require('express');
let app = express();
var helper = require('../helpers/github.js');
var bodyParser = require('body-parser');
var db = require('../database/index');

app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.json());

//body.owner.login
//body.owner.avatar_url
//body.html_url
//body.description
//body.forks
app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  console.log('THIS IS USERNAME', req.body.username);
  helper.getReposByUsername(req.body.username, (body) => {
    db.save(body, res);
  });
  
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  db.find(res);
  console.log('Get request initiated from client');

});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

