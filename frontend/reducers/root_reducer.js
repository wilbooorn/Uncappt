import { combineReducers } from 'redux';
import SessionsReducer from './sessions_reducer';
import BeersReducer from './beers_reducer';
import CheckinsReducer from './checkins_reducer';

const rootReducer = combineReducers({
  session: SessionsReducer,
  beerInfo: BeersReducer,
  checkinInfo: CheckinsReducer
});

export default rootReducer;
