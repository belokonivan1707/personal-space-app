import { combineReducers } from 'redux';
import cinemaReducer from './cinema/reducer';

const rootReducer = combineReducers({
  cinemaStore: cinemaReducer,
});

export default rootReducer;
