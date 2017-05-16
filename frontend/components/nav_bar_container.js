import { signout } from '../actions/session_actions';
import { connect } from 'react-redux';
import NavBar from './nav_bar';

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout())
});

export default connect(
  null,
  mapDispatchToProps
)(NavBar);
