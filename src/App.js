import React, { Component } from 'react';

import Header from './components/header';
import Banner from './components/banner';
import TaskList from './components/taskList';

class App extends Component {
  
  constructor(props) {
    super();
    this.state = {
      isAuthenticated: false
    }

    //here to do the socket things
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
          { this.state.isAuthenticated ? <TaskList tasks={[1,2,3,4]} /> : null }
        </div>
    );
  }
}

export default App;
