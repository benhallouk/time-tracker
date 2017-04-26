const isAuthenticated = (state = false, action) => {
  
  switch (action.type) {
    case 'REQUEST_LOGIN':
      return  false
    case 'RECIEVE_TOKEN':
      return  true  
    default:
      return state
  }
}

export default isAuthenticated