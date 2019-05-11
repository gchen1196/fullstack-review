const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  repo_html: String,
  repo_description: String,
  repo_fork: Number
  
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repo) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  var filteredRepo = new Repo;
  filteredRepo.repo_html = repo.html_url;
  filteredRepo.repo_description = repo.description;
  filteredRepo.repo_fork = repo.forks_count;
  filteredRepo.save((err) => {
    if(err) {
      console.log(err);
    } else {
      console.log()
    }
  })

}

module.exports.save = save;