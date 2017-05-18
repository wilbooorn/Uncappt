import {connect} from 'react-redux';
import NewBeerForm from './new_beer_form';
import {createNewBeer, requestOneBeer,
  updateBeer} from '../../actions/beer_actions';

const mapStateToProps = state => ({
  errors: state.beerInfo.errors,
  beer: state.beerInfo.beers
});

const mapDispatchToProps = dispatch => ({
  createNewBeer: (beer) => dispatch(createNewBeer(beer)),
  requestOneBeer: beerId => dispatch(requestOneBeer(beerId)),
  updateBeer: beer => dispatch(updateBeer(beer))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewBeerForm);
