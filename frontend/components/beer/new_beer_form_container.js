import {connect} from 'react-redux';
import NewBeerForm from './new_beer_form';
import {createNewBeer} from '../../actions/beer_actions';

const mapStateToProps = state => ({
  errors: state.beerInfo.errors
});

const mapDispatchToProps = dispatch => ({
  createNewBeer: (beer) => dispatch(createNewBeer(beer))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewBeerForm);
