import {connect} from 'react-redux';
import CheckinShow from './checkin_show';
import {fetchOneCheckin, deleteCheckin} from "../../actions/checkin_actions";

const mapStateToProps = state => ({
  checkins: state.checkinInfo.checkins,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchOneCheckin: (checkinId) => dispatch(fetchOneCheckin(checkinId)),
  deleteCheckin: (checkinId) => dispatch(deleteCheckin(checkinId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckinShow);
