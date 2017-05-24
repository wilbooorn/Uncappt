import {connect} from 'react-redux';
import UserProfile from './user_profile';
import {fetchOneUser, updateUser} from '../../actions/user_actions';

const mapStateToProps = state => ({
  user: state.userInfo.user,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchOneUser: (userId) => dispatch(fetchOneUser(userId)),
  updateUser: (user) => dispatch(updateUser(user))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
