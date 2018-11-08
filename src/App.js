import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    users: []
  }

  componentDidMount() {
    fetch('/api/', {
      headers: {
         authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbmRyZWFzIiwicm9sZXMiOiJ1c2VyIiwiaWF0IjoxNTQxNjMwNDUyfQ.2q77hz2-H0AXvSmGjiu1Q6OffMEM2aJcrgVzUk9WRHE'
       }
    })
    .then( response => response.json())
    .then( users => {
      if(users.status !== 500) {
        this.setState({ users })
      }
    });
  }

  render() {
    const users = this.state.users.map( user => (<div key={user.id}>{user.username}</div>));
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {users}
        </header>
      </div>
    );
  }
}

export default App;
