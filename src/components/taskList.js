import React from 'react';
import Task from './task';

const TaskList = (props) => (
  <div className="container">
    {props.tasks.map(task => (<Task key={task} name={task} />))}
  </div>
)

export default TaskList;
