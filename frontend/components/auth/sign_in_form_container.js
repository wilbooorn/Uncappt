import { signin } from '../../actions/session_actions';
import SignInForm from './sign_in_form';

import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  signin: (user) => dispatch(signin(user))
});

export default connect(
  null,
  mapDispatchToProps
)(SignInForm);
