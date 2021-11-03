import { Reducer } from 'react';
import { REQUEST_SUCCESS, REQUEST_DATA, REQUEST_ERROR } from './consts';
import { articlesData, ARTICLES_DATA } from './data/data';
import { ReducerArticlesState, PostsCommentsData } from './types';
import { combinePostsCommentsUsers } from './utils';

export type ActionsType =
  | { type: 'REQUEST_SUCCESS'; payload: PostsCommentsData }
  | { type: 'REQUEST_DATA' }
  | { type: 'REQUEST_ERROR' };

const INNITTIAL_STATE = {
  articles: articlesData,
  articlesEN: ARTICLES_DATA,
  loading: false,
  error: false,
  usersData: {
    comments: [],
    posts: [],
    users: [],
    processed: [],
  },
};

const articlesReducer: Reducer<ReducerArticlesState, ActionsType> = (state = INNITTIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return {
        ...state,
        loading: true,
      };

    case REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        usersData: {
          ...state.usersData,
          comments: action.payload.comments,
          posts: action.payload.posts,
          users: action.payload.users,
          processed: [
            ...combinePostsCommentsUsers(action.payload.comments, action.payload.posts, action.payload.users),
          ],
        },
      };

    case REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default articlesReducer;
