import React from 'react';
import Repo from './Repo.jsx';

const RepoList = (props) => (
  <div>
    <h2> Repo List Component </h2>
    There are {props.repos.length} repos.
    <ul>
      {props.repos.map((repo, index) => <Repo key={index} repo={repo} />)}
    </ul>
  </div>

)

export default RepoList;