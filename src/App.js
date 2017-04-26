import React, { Component } from 'react';

import HeaderContainer from './containers/headerContainer';
import Banner from './components/banner';
import TaskListContainer from './containers/taskListContainer';

class App extends Component {

  render() {
    return (      
        <div>
          <HeaderContainer  />
          <Banner />
          <TaskListContainer />          
        </div>
    );
  }
}

export default App;
