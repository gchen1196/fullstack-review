import React from 'react';

const Repo = (props) => {
  return(
    <div>
      <h3>{props.repo.username}</h3>
      <img src={props.repo.avatar}/>
      <div>{`Repo: ${props.repo.url}`}</div>
      <div/>
      <div>{props.repo.description}</div>
      <div>{`Number of Forks: ${props.repo.forks}`}</div>
    </div>
  )
}

export default Repo; 