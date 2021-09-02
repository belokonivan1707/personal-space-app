import { combineReducers } from 'redux';
import userReducer from './user/reducer';
import cinemaReducer from './cinema/reducer';
import writersReducer from './writers/reducer';
import photosReducer from './photos/reducer';
import blocksGameReducer from './blocks-game/reducer';
import { BlocksGameState } from './blocks-game/types';
import { CinemaState } from './cinema/types';
import { WritersState } from './writers/types';
import { PhotosState } from './photos/types';
import { UserStateType } from './user/types';

export interface RootState {
  cinemaStore: CinemaState;
  blocksGame: BlocksGameState;
  writersStore: WritersState;
  photosStore: PhotosState;
  userStore: UserStateType;
}

const rootReducer = combineReducers({
  cinemaStore: cinemaReducer,
  writersStore: writersReducer,
  photosStore: photosReducer,
  userStore: userReducer,
  blocksGame: blocksGameReducer,
});

export default rootReducer;
