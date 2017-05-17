import { combineReducers } from 'redux';
import SessionsReducer from './sessions_reducer';
import BeersReducer from './beers_reducer';

const rootReducer = combineReducers({
  session: SessionsReducer,
  beers: BeersReducer
});

export default rootReducer;
