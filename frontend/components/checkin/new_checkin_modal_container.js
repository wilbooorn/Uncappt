import {connect} from 'react-redux';
import NewCheckinModal from './new_checkin_modal';
import {requestOneBeer} from '../../actions/beer_actions';
import {createNewCheckin, fetchOneCheckin,
updateCheckin} from '../../actions/checkin_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  beer: state.beerInfo.beers,
  checkin: state.checkinInfo.checkins,
  errors: state.checkinInfo.errors
});

const mapDispatchToProps = dispatch => ({
  requestOneBeer: (beerId) => dispatch(requestOneBeer(beerId)),
  createNewCheckin: (checkin) => dispatch(createNewCheckin(checkin)),
  fetchOneCheckin: (checkinId) => dispatch(fetchOneCheckin(checkinId)),
  updateCheckin: (checkin) => dispatch(updateCheckin(checkin))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCheckinModal);
