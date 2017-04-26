import { connect } from 'react-redux'
import { requestLogin } from '../actions'
import Header from '../components/header'

const mapStateToProps = (state, ownProps) => {  
  return {
    isAuthenticated:  state.isAuthenticated
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (credentials) => {
      dispatch(requestLogin(credentials,dispatch))
    }
  }
}

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export default HeaderContainer