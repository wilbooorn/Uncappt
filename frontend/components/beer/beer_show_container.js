import {connect} from 'react-redux';
import BeerShow from './beer_show';
import {requestOneBeer, deleteBeer, clearBeer} from '../../actions/beer_actions';
import {selectAllCheckins, selectBeerCheckins} from '../../reducers/selectors';

const mapStateToProps = state => ({
  beer: state.beerInfo.beers,
});

const mapDispatchToProps = dispatch => ({
  requestOneBeer: (beerId) => dispatch(requestOneBeer(beerId)),
  deleteBeer: (beerId) => dispatch(deleteBeer(beerId)),
  clearBeer: () => dispatch(clearBeer())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeerShow);
