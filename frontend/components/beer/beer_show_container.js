import {connect} from 'react-redux';
import BeerShow from './beer_show';
import {requestOneBeer} from '../../actions/beer_actions';

const mapStateToProps = state => ({
  beer: state.beers
});

const mapDispatchToProps = dispatch => ({
  requestOneBeer: (beerId) => dispatch(requestOneBeer(beerId))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeerShow);
