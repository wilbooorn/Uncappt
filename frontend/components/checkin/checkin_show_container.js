import {connect} from 'react-redux';
import CheckinShow from './checkin_show';
import {fetchOneCheckin} from "../../actions/checkin_actions";

const mapStateToProps = state => ({
  checkin: state.checkinInfo.checkins
});

const mapDispatchToProps = dispatch => ({
  fetchOneCheckin: (checkinId) => dispatch(fetchOneCheckin(checkinId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckinShow);
