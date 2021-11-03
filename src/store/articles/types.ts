import { ArticlesDataTypes } from './data/data';

export interface ArticlesStoreTypes {
  articlesStore: ReducerArticlesState;
}

export interface UsersData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface UsersCommentsData {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface UsersPostsData {
  postId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostsCommentsData {
  comments: UsersCommentsData[];
  posts: UsersPostsData[];
  users: UsersData[];
}

export interface ReducerArticlesState {
  articles: ArticlesDataTypes[];
  articlesEN: ArticlesDataTypes[];
  loading: boolean;
  error: boolean;
  usersData: {
    comments: [] | UsersCommentsData[];
    posts: [] | UsersPostsData[];
    users: [] | UsersData[];
    processed: [] | any;
  };
}
