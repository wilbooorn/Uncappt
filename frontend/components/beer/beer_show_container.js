import {connect} from 'react-redux';
import BeerShow from './beer_show';
import {requestOneBeer, deleteBeer} from '../../actions/beer_actions';

const mapStateToProps = state => ({
  beer: state.beerInfo.beers
});

const mapDispatchToProps = dispatch => ({
  requestOneBeer: (beerId) => dispatch(requestOneBeer(beerId)),
  deleteBeer: (beerId) => dispatch(deleteBeer(beerId))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeerShow);
