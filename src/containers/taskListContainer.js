import { connect } from 'react-redux'
import TaskList from '../components/taskList'

const mapStateToProps = (state, ownProps) => {  
  return {
    tasks:  state.tasks || [],
    token: state.token
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
}

const TaskListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList)

export default TaskListContainer