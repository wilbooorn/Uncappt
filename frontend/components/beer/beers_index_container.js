import BeersIndex from './beers_index';
import { connect } from 'react-redux';
import selectAllBeers from '../../reducers/selectors';
import requestAllBeer from '../../actions/beer_actions';

const mapStateToProps = state => ({
  beers: selectAllBeers(state)
});

const mapDispatchToProps = dispatch => ({
  requestAllBeer: () => dispatch(requestAllBeer())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeersIndex);
