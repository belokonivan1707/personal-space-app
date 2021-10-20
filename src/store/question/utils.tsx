import { SetAnwerPayloadType } from './action';
import { Questions } from './data/data';
import { UserAnswers } from './types';

export const countCorrectAnswers = (questions: Questions[], userAnswers: UserAnswers[]) => {
  let correctAnswers = 0;
  let incompleteAnswers = 0;
  let wrongAnswers = 0;

  for (let i = 0; i < questions.length; i += 1) {
    if (questions[i].rightAnswers.length !== 0) {
      const foundUserAnswersForCurrentQuestion = userAnswers?.find(el => el?.questionID === questions[i]?.id)?.answers;

      if (foundUserAnswersForCurrentQuestion) {
        let correctAnswersForCurrentQuestion = 0;
        questions[i].rightAnswers.forEach(rightAnswer => {
          if (foundUserAnswersForCurrentQuestion?.includes(rightAnswer.id)) correctAnswersForCurrentQuestion += 1;
        });

        if (foundUserAnswersForCurrentQuestion.length > questions[i].rightAnswers.length) {
          incompleteAnswers += 1;
          correctAnswersForCurrentQuestion = 0;
        } else if (questions[i].rightAnswers.length === correctAnswersForCurrentQuestion) {
          correctAnswers += 1;
          correctAnswersForCurrentQuestion = 0;
        } else if (
          questions[i].rightAnswers.length > correctAnswersForCurrentQuestion &&
          correctAnswersForCurrentQuestion !== 0
        ) {
          incompleteAnswers += 1;
          correctAnswersForCurrentQuestion = 0;
        } else if (correctAnswersForCurrentQuestion === 0) {
          wrongAnswers += 1;
          correctAnswersForCurrentQuestion = 0;
        }
      }
    }
  }

  return [
    { id: 1, name: 'correct answers', result: correctAnswers },
    { id: 2, name: 'incomplete answers', result: incompleteAnswers },
    { id: 3, name: 'wrong answers', result: wrongAnswers },
  ];
};

export const setNewAnswer = (userAnswers: UserAnswers[] | [], newAnswer: SetAnwerPayloadType) => {
  if (userAnswers.length === 0) {
    return [{ questionID: newAnswer.questionID, answers: [newAnswer.answerID] }];
  }

  if (userAnswers.length > 0) {
    const questionExist = userAnswers.find(question => question.questionID === newAnswer.questionID);

    if (questionExist) {
      const updatedAnswers = userAnswers.map(question => {
        if (question.questionID === newAnswer.questionID) {
          if (question.answers?.includes(newAnswer.answerID)) {
            const filteredAnswers = question.answers.filter(answer => answer !== newAnswer.answerID);
            return { ...question, answers: [...filteredAnswers] };
          }

          return { ...question, answers: [...question.answers, newAnswer.answerID] };
        }

        return question;
      });

      return [...updatedAnswers];
    }

    return [...userAnswers, { questionID: newAnswer.questionID, answers: [newAnswer.answerID] }];
  }

  return [...userAnswers];
};
