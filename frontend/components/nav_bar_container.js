import { signout } from '../actions/session_actions';
import { connect } from 'react-redux';
import NavBar from './nav_bar';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
