import { combineReducers } from 'redux';
import cinemaReducer from './cinema/reducer';
import blocksGmaeReducer from './blocks-game/reducer';

const rootReducer = combineReducers({
  cinemaStore: cinemaReducer,
  blocksGame: blocksGmaeReducer,
});

export default rootReducer;
