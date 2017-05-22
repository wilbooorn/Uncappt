import {connect} from 'react-redux';
import NewCheckinModal from './new_checkin_modal';
import {requestOneBeer} from '../../actions/beer_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  beer: state.beerInfo.beers
});

const mapDispatchToProps = dispatch => ({
  requestOneBeer: (beerId) => dispatch(requestOneBeer(beerId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCheckinModal);
