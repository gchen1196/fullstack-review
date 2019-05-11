import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }

  }

  search (term) {
    console.log(`${term} was searched`);
    axios.post('/repos', {
      username: term
    })
    .then((response) => {
      console.log(response);
      axios.get('/repos')
      .then((result) => {
        console.log(result);
        this.setState({repos: result.data});
      })
      .catch((err) => {
        console.log(err);
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));