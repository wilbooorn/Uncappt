import {connect} from 'react-redux';
import CheckinIndexItem from './checkin_index_item';
import {deleteCheckin} from '../../actions/checkin_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  deleteCheckin: (checkinId) => dispatch(deleteCheckin(checkinId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckinIndexItem);
