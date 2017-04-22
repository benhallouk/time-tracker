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
        headers: {
          'Content-Type' : 'application/x-www-form-urlencoded'
        },
        body: `email=${credentials.email}&password=${credentials.password}`
    })
    .then((response) => {
        const token = response.headers.get('token');        
        if(token){
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
          {this.state.isAuthenticated ? <TaskList token={this.state.authenticationToken} /> : null}
        </div>
    );
  }
}

export default App;
