import React, { Component } from 'react';
import Task from './task';

class TaskList extends Component {

  componentWillMount(){
    if(this.props.isAuthenticated){
      
      const webSocket = new WebSocket(`ws://localhost:9000/endpoint?token=${this.props.token}`, ["protocolOne", "protocolTwo"]);
      
      webSocket.onopen = (event) => {
       webSocket.send(JSON.stringify({type: 'queryTasks'}));
      }

      webSocket.onmessage = (event) => {        
        this.setState(prevState => ({
          tasks : JSON.parse(event.data)
        }));
      }

      this.setState(prevState => ({
        tasks : [1,2,3,4,5,6,7,8,9,10]
      }));
    }
  }

  render(){
    return (
      this.props.isAuthenticated ? 
      <div className="container">
        <div className="row">
          <h2>Task list</h2>
          <hr />
        </div>
        <div className="row tasks">
          {this.state.tasks.map(task => (<Task key={task} name={task} />))}
        </div>    
      </div>
      : null
    )
  }
}
export default TaskList;
