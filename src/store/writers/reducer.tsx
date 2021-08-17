import { writersData, WritersType } from './data';

export interface InitialState {
  writers: WritersType[];
  writersToShow: WritersType[];
}

const INNITTIAL_STATE = {
  writers: writersData,
  writersToShow: writersData,
};

export interface Actions {
  type: string;
  payload?: string;
}

const writersReducer = (state = INNITTIAL_STATE, action: Actions) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default writersReducer;
