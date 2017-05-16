import { signup } from './actions/session_actions';
import SignUpForm from './sign_in_form';

import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  signup: (user) => dispatch(signup(user))
});

export default connect(
  null,
  mapDispatchToProps
)(SignUpForm);
