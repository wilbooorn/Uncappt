import { signup } from '../../actions/session_actions';
import SignUpForm from './sign_up_form';

import { connect } from 'react-redux';

const mapStateToProps = state => ({
  errors: state.session.errors
});

const mapDispatchToProps = dispatch => ({
  signup: (user) => dispatch(signup(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);
