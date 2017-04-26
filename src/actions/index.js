import Nes from 'nes';

const client = new Nes.Client('ws://localhost:9000');

export const reciveTasks = (tasks) => {  
  return {
    type: 'RECIEVE_TASKS',
    tasks
  }
}

export const reciveToken = (token,dispatch) => {  
  client.connect({ auth: { headers: { authorization: `Basic ${token}` } } }, (err) => {

      client.request('endpoint', (err, payload) => {
        dispatch(reciveTasks(JSON.parse(payload)))
      })
  })

  return {
    type: 'RECIEVE_TOKEN',
    token
  }
}

export const requestLogin = (credentials,dispatch) => {

  fetch('http://localhost:9000/login', {
      method: 'post',
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded'
      },
      body: `email=${credentials.email}&password=${credentials.password}`
  })
  .then((response) => {
      const token = response.headers.get('token')
      if(token){
        dispatch(reciveToken(token, dispatch))
      }
  });
  
  return {
    type: 'REQUEST_LOGIN'
  }
}
