interface Questions {
  id: number;
  title: string;
  question: string;
  link: string;
  1: string;
  2: string;
  3: string;
  4: string;
}

export interface QuestionsJsType {
  id: number;
  title: string;

  questions: {
    functions: Questions[];
    arrays: Questions[];
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
        1: 'Василий',
        2: 'Егор',
        3: 'Николай',
        4: 'Альберт',
      },
      {
        id: 2,
        title: 'Higher order function',
        question: 'Сколько Василию лет?',
        link: ' ',
        1: '18',
        2: '34',
        3: '8',
        4: '23',
      },
    ],
    arrays: [
      {
        id: 10,
        title: 'array',
        question: 'What is Immutability?',
        link: ' ',
        1: 'Not changing the data, not changing the state. ',
        2: 'The idea making cioues of the state and returning and returning a new state every time',
        3: 'The idea making cioues of the state and returning and returning a new state every time',
        4: 'The idea making cioues of the state and returning and returning a new state every time',
      },
      {
        id: 10,
        title: 'array',
        question: 'What is higher order function?',
        link: ' ',
        1: 'Function which takes one or more function as arguments',
        2: 'Return the function as a result',
        3: 'Return the function as a result',
        4: 'Return the function as a result',
      },
    ],
  },
};
