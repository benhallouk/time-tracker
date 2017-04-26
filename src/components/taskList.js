import React, { Component } from 'react';
import Task from './task';

class TaskList extends Component {

  render(){
    if(this.props.tasks.length ===0) return (<div className="container"></div>)

    return (   
      <div className="container">
        <div className="row">
          <h2>Task list</h2>
          <hr />
        </div>
        <div className="row tasks">
          {this.props.tasks.map(task => (<Task key={task} name={task} />))}
        </div>    
      </div>      
    )
  }
}
export default TaskList;
