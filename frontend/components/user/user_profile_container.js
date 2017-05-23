import {connect} from 'react-redux';
import UserProfile from './user_profile';
import {fetchOneUser} from '../../actions/user_actions';

const mapStateToProps = state => ({
  user: state.userInfo.user
});

const mapDispatchToProps = dispatch => ({
  fetchOneUser: (userId) => dispatch(fetchOneUser(userId))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
