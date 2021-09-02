import { Reducer } from 'react';
import { USER } from './data/data';
import { UserStateType } from './types';

const INNITTIAL_STATE = {
  user: USER,
};

export interface ActionsType {
  type: string;
  payload?: string;
}

const userReducer: Reducer<UserStateType, ActionsType> = (state = INNITTIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
