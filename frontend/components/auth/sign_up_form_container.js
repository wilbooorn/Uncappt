import { signup } from '../../actions/session_actions';
import SignUpForm from './sign_up_form';
import {clearErrors} from '../../actions/session_actions';

import { connect } from 'react-redux';

const mapStateToProps = state => ({
  errors: state.session.errors
});

const mapDispatchToProps = dispatch => ({
  signup: (user) => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);
