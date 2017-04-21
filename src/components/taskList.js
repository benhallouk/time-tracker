import React, { Component } from 'react';
import Task from './task';

class TaskList extends Component {

  componentWillMount(){
    if(this.props.isAuthenticated){
      //here to do the socket things
      //this.props.token
      this.setState(prevState => ({
        tasks : [1,2,3,4]
      }));
    }
  }

  render(){
    return (
      this.props.isAuthenticated ? 
      <div className="container">
        {this.state.tasks.map(task => (<Task key={task} name={task} />))}
      </div>
      : null
    )
  }
}
export default TaskList;
