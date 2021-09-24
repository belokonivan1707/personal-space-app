import { Questions, QuestionsJsType } from './data/data';

export interface QuestionsStoreType {
  questionsStore: {
    questions: {
      JavaScript: QuestionsJsType;
      CSS: QuestionsJsType;
      HTML: QuestionsJsType;
    };
    user: {
      selectedCategory: [] | Questions[];
      testBegin: boolean;
      testFinised: boolean;
      usersAnswers: string[] | [];
      numberCorrectAnswers: number;
    };
  };
}

export interface QuestionsInitialType {
  questions: {
    JavaScript: QuestionsJsType;
    CSS: QuestionsJsType;
    HTML: QuestionsJsType;
  };
  user: {
    selectedCategory: [] | Questions[];
    testBegin: boolean;
    testFinised: boolean;
    usersAnswers: string[] | [];
    numberCorrectAnswers: number;
  };
}
