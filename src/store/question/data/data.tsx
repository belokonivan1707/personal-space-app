export interface AnswerOption {
  id: number;
  option: string;
}

export interface Questions {
  id: number;
  title: string;
  question: string;
  link: string;
  rightAnswers: AnswerOption[];
  answerOption: AnswerOption[];
}

export interface QuestionsJsType {
  id: number;
  title: string;

  questions: {
    arrays: Questions[];
    functions: Questions[];
  };
}

export const QUESTIONS_JS = {
  id: 1,
  title: 'JavaScript',
  questions: {
    functions: [
      {
        id: 1,
        title: 'Immutability',
        question: 'Как зовут Василия?',
        link: ' ',
        rightAnswers: [{ id: 1, option: 'Василий' }],
        answerOption: [
          { id: 1, option: 'Василий' },
          { id: 2, option: 'Егор' },
          { id: 3, option: 'Анатолий' },
          { id: 4, option: 'Писков' },
        ],
      },
      {
        id: 2,
        title: 'Higher order function',
        question: '25 - 20 ?',
        link: ' ',
        rightAnswers: [{ id: 1, option: '5' }],
        answerOption: [
          { id: 1, option: '5' },
          { id: 2, option: '1' },
          { id: 3, option: '2' },
          { id: 4, option: '23' },
        ],
      },
      {
        id: 3,
        title: 'Higher order function',
        question: 'Какого цвета небо в ясную погоду?',
        link: ' ',
        rightAnswers: [{ id: 4, option: 'Голубое' }],
        answerOption: [
          { id: 1, option: 'Оранжевое' },
          { id: 2, option: 'Пиздец' },
          { id: 3, option: 'Черное' },
          { id: 4, option: 'Голубое' },
        ],
      },
    ],
    arrays: [
      {
        id: 10,
        title: 'array',
        question: 'What is Immutability?',
        link: ' ',
        rightAnswers: [{ id: 4, option: 'Василий' }],
        answerOption: [
          { id: 1, option: 'Василий' },
          { id: 2, option: 'Егор' },
          { id: 3, option: 'Анатолий' },
          { id: 4, option: 'Писков' },
        ],
      },
      {
        id: 10,
        title: 'array',
        question: 'What is higher order function?',
        link: ' ',
        rightAnswers: [{ id: 1, option: 'Василий' }],
        answerOption: [
          { id: 1, option: 'Василий' },
          { id: 2, option: 'Егор' },
          { id: 3, option: 'Анатолий' },
          { id: 4, option: 'Писков' },
        ],
      },
    ],
  },
};
