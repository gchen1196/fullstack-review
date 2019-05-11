const request = require('request');
const config = require('../config.js');

let getReposByUsername = (name, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API
  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${name}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  request(options, (err, res, body) => {
    if (err) {
      res.status(500);
      res.send(err);
    } else {
      callback(JSON.parse(body));
    }
  })

}

module.exports.getReposByUsername = getReposByUsername;
