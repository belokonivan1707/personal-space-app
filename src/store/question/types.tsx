import { Questions, QuestionsJsType } from './data/data';

export interface UserAnswers {
  questionID: number;
  answers: number[];
}

export interface NumbersOfCorrectAnswers {
  id: number;
  name: string;
  result: number;
}

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
      userAnswers: [] | UserAnswers[];
      numbersOfCorrectAnswers: NumbersOfCorrectAnswers[];
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
    userAnswers: [] | UserAnswers[];
    numbersOfCorrectAnswers: NumbersOfCorrectAnswers[];
  };
}

export interface SelectorUserType {
  selectedCategory: [] | Questions[];
  testBegin: boolean;
  testFinised: boolean;
  userAnswers: [] | UserAnswers[];
  numbersOfCorrectAnswers: NumbersOfCorrectAnswers[];
}
