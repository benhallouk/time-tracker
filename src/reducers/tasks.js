const tasks = (state = [], action) => {

  switch (action.type) {
    case 'REQUEST_TASKS':
      return  [];
    case 'RECIEVE_TASKS':
      return  action.tasks;
    default:
      return state
  }
}

export default tasks