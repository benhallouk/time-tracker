import React from 'react';

const Task = (props) => (
  <div className="col-md-2">
    <button className="btn btn-info btn-lg">{props.name}</button>
  </div>
)

export default Task
