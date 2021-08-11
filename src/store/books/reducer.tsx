import { Reducer } from 'react';
import { TEST } from './const';
import { BooksState } from './types';

const INNITTIAL_STATE = {
  books: [],
  booksToShow: [],
};

const cinemaReducer: Reducer<BooksState, any> = (state = INNITTIAL_STATE, action) => {
  switch (action.type) {
    // case LOAD_FAIVORITE_CINEMA:
    //   return {
    //     ...state,
    //     cinemaToShow: sortByProperty(state.cinema, action.payload),
    //   };

    default:
      return state;
  }
};

export default cinemaReducer;
