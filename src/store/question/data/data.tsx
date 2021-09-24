export interface Questions {
  id: number;
  title: string;
  question: string;
  link: string;
  rightAnswers: string[];
  first: string;
  second: string;
  third: string;
  fourth: string;
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
        rightAnswers: ['first'],
        first: 'Василий',
        second: 'Егор',
        third: 'Николай',
        fourth: 'Альберт',
      },
      {
        id: 2,
        title: 'Higher order function',
        question: 'Сколько Василию лет?',
        link: ' ',
        rightAnswers: ['third'],
        first: '18',
        second: '34',
        third: '8',
        fourth: '23',
      },
      {
        id: 3,
        title: 'Higher order function',
        question: 'Почему Ярик злиться всерьез, когда над ним шутят?',
        link: ' ',
        rightAnswers: ['first'],
        first: 'У него низкая самооценка',
        second: 'Он плохо контролирует свою злость',
        third: 'Он хочет быть лидером и не может терпеть насмешек',
        fourth: 'Его обижали в школе',
      },
    ],
    arrays: [
      {
        id: 10,
        title: 'array',
        question: 'What is Immutability?',
        link: ' ',
        rightAnswers: ['first'],
        first: 'Function which takes one or more function as arguments',
        second: 'The idea making cioues of the state and returning and returning a new state every time',
        third: 'Not changing the data, not changing the state',
        fourth: '23',
      },
      {
        id: 10,
        title: 'array',
        question: 'What is higher order function?',
        link: ' ',
        rightAnswers: ['first'],
        first: 'Function which takes one or more function as arguments',
        second: '34',
        third: '8',
        fourth: '23',
      },
    ],
  },
};
