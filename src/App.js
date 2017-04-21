import React, { Component } from 'react';

import Header from './components/header';
import Banner from './components/banner';
import TaskList from './components/taskList';

class App extends Component {
  
  state = {
    isAuthenticated: false
  }

  authenticate = (credentials) => {
    fetch('http://localhost:9000/login', {
        method: 'post',
        body: credentials
    })
    .then(function (response) {
        const token = response.headers.get('token');
        if(response.ok && token){
          this.setState((prevState) => ({
            isAuthenticated: true,
            authenticationToken: token
          }));
        } 
    });
  }

  render() {
    return (      
        <div>
          <Header onSubmit={this.authenticate} isAuthenticated={this.state.isAuthenticated} />
          <Banner />
          <TaskList isAuthenticated={this.state.isAuthenticated} token={this.state.token} />
        </div>
    );
  }
}

export default App;
