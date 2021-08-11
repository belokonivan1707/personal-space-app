import { combineReducers } from 'redux';
import cinemaReducer from './cinema/reducer';
import blocksGameReducer from './blocks-game/reducer';
import { BlocksGameState } from './blocks-game/types';
import { CinemaState } from './cinema/types';

export interface RootState {
  cinemaStore: CinemaState;
  blocksGame: BlocksGameState;
}

const rootReducer = combineReducers({
  cinemaStore: cinemaReducer,
  blocksGame: blocksGameReducer,
});

export default rootReducer;
