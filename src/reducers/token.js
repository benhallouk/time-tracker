const token = (state = null, action) => {
  
  switch (action.type) {
    case 'RECIEVE_TOKEN':
      return  action.token;    
    default:
      return state
  }
}

export default token