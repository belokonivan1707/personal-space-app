import { SetAnwerPayloadType } from './action';
import { Questions } from './data/data';

export const checkTheResultOfTest = (questions: Questions[], answers: any) => {
  console.log(answers);
  console.log(questions);
  return 1;
};
