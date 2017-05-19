import CheckinIndex from './checkin_index';
import {connect} from 'react-redux';
import {selectAllCheckins} from '../../reducers/selectors';
import {fetchAllCheckins} from '../../actions/checkin_actions';

const mapStateToProps = state => ({
  checkins: selectAllCheckins(state),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchAllCheckins: () => dispatch(fetchAllCheckins())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckinIndex);
