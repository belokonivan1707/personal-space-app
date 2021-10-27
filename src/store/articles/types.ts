import { ArticlesDataTypes } from './data/data';

export interface ReducerArticlesState {
  articles: ArticlesDataTypes[];
  articlesEN: ArticlesDataTypes[];
}

export interface ArticlesStoreTypes {
  articlesStore: ReducerArticlesState;
}
