import { ArticlesDataTypes } from './data/data';

export interface ReducerArticlesState {
  articles: ArticlesDataTypes[];
  articlesEN: ArticlesDataTypes[];
  loading: boolean;
  error: boolean;
  usersData: {
    comments: [] | UsersCommentsData[];
  };
}

export interface ArticlesStoreTypes {
  articlesStore: ReducerArticlesState;
}

export interface UsersCommentsData {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
