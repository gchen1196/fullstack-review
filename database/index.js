const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  username: String,
  avatar: String,
  url: String,
  description: String,
  forks: Number
  
});

let Repo = mongoose.model('Repo', repoSchema);

let find = (res) => {
  Repo.find({}).limit(25).sort({forks: -1}).exec((err, data) => res.send(data));
}

let save = (repos, res) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  for (var i = 0; i < repos.length; i++) {
    var repo = repos[i];
    var filteredRepo = new Repo({
      username: repo.owner.login,
      avatar: repo.owner.avatar_url,
      url: repo.html_url,
      description: repo.description,
      forks: repo.forks
    });
    filteredRepo.save((err) => {
      if (err) {
        res.status(500);
        res.send(err);
      } else {
        res.status(201);
        res.send();
      }
    })
  }
}


module.exports.find = find;
module.exports.save = save;