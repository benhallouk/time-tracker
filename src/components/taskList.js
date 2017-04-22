import React, { Component } from 'react';
import Task from './task';
import Nes from 'nes';

class TaskList extends Component {

  state = {
    tasks : []
  }

  componentWillMount(){
        
      const client = new Nes.Client('ws://localhost:9000');
      client.connect({ auth: { headers: { authorization: `Basic ${this.props.token}` } } }, (err) => {

          client.request('endpoint', (err, payload) => {
            console.log(payload);
            this.setState(prevState => ({
              tasks : JSON.parse(payload)
            }));
          });
      });
  }

  render(){    
    return (      
      <div className="container">
        <div className="row">
          <h2>Task list</h2>
          <hr />
        </div>
        <div className="row tasks">
          {this.state.tasks.map(task => (<Task key={task} name={task} />))}
        </div>    
      </div>      
    )
  }
}
export default TaskList;
