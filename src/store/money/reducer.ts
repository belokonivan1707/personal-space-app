import { Reducer } from 'react';
import { GET_EXPENSES_DATA, SUCCESS_EXPENSES_RESPONSE, ERROR_EXPENSES_REQUEST } from './consts';
import { MoneyManagerState, ActionsType } from './types';

const INNITTIAL_STATE = {
  money: {
    expenses: {
      categories: [],
      loading: false,
      error: false,
    },
  },
};

const moneyReducer: Reducer<MoneyManagerState, ActionsType> = (state = INNITTIAL_STATE, action) => {
  switch (action.type) {
    case GET_EXPENSES_DATA:
      return {
        ...state,
        money: {
          ...state.money,
          expenses: {
            ...state.money.expenses,
            loading: true,
          },
        },
      };
    case SUCCESS_EXPENSES_RESPONSE:
      return {
        ...state,
        money: {
          ...state.money,
          expenses: {
            ...state.money.expenses,
            categories: action.payload,
            loading: false,
          },
        },
      };
    case ERROR_EXPENSES_REQUEST:
      return {
        ...state,
        money: {
          ...state.money,
          expenses: {
            ...state.money.expenses,
            loading: false,
            error: true,
          },
        },
      };

    default:
      return state;
  }
};

export default moneyReducer;
