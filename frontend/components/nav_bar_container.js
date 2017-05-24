import { signout } from '../actions/session_actions';
import { connect } from 'react-redux';
import NavBar from './nav_bar';
import {searchBeer} from '../actions/beer_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout()),
  searchBeer: (search) => dispatch(searchBeer(search))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
