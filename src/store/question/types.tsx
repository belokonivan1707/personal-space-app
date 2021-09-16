import { QuestionsJsType } from './data/data';

export interface QuestionsStoreType {
  questionsStore: {
    JavaScript: QuestionsJsType;
    CSS: QuestionsJsType;
    HTML: QuestionsJsType;
  };
}

export interface QuestionsInitialType {
  JavaScript: QuestionsJsType;
  CSS: QuestionsJsType;
  HTML: QuestionsJsType;
}
