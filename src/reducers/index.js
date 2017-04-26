import { combineReducers } from 'redux'
import isAuthenticated from './isAuthenticated'
import token from './token'
import tasks from './tasks'

const timeTrackerApp = combineReducers({
  isAuthenticated,
  tasks,
  token
})

export default timeTrackerApp