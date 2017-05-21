import {connect} from 'react-redux';
import CheckinIndexItem from './checkin_index_item';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

export default connect(
  mapStateToProps,
  null
)(CheckinIndexItem);
