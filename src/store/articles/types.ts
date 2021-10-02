import { ArticlesDataTypes } from './data/data';

export interface ReducerArticlesState {
  articles: ArticlesDataTypes[];
}

export interface ArticlesStoreTypes {
  articlesStore: ReducerArticlesState;
}
