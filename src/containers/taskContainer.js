import { connect } from 'react-redux'
import Task from '../components/task'

const mapStateToProps = (state, ownProps) => {  
  return {
    ownProps
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
}

const TaskContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Task)

export default TaskContainer