import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAnswerOnQuestion, setTestFinished } from 'store/question/action';
import { QuestionsStoreType, SelectorUserType } from 'store/question/types';
import { Questions } from 'store/question/data/data';
import QuestionCard from 'components/questions-page/question-card/question-card';
import style from './styles.module.css';

interface Props {
  questions: Questions[];
}

const PassTheTest = ({ questions }: Props) => {
  const dispatch = useDispatch();
  const currentTestInfo: SelectorUserType = useSelector<QuestionsStoreType, SelectorUserType>(
    state => state.questionsStore.user
  );
  const { testFinised } = currentTestInfo;

  const [counter, setCounter] = useState({ lastindex: 0, currentindex: 1 });
  const { lastindex, currentindex } = counter;

  const [checkboxChecked, setCheckbox] = useState(false);

  const dispatchUserAnswer = (questionID: number, answerID: number) => {
    setCheckbox(prev => !prev);
    dispatch(setAnswerOnQuestion({ questionID, answerID }));
  };

  const nextQuestionButton = () => {
    if (checkboxChecked) {
      setCounter({ lastindex: lastindex + 1, currentindex: currentindex + 1 });
      setCheckbox(prev => !prev);
    }

    if (questions.length === currentindex) {
      dispatch(setTestFinished());
    }
  };

  return (
    <div className={style.questioncard}>
      {testFinised ? null : <h2>Pass The Test</h2>}
      {questions.slice(lastindex, currentindex).map((el: Questions) => {
        return (
          <div key={el.id}>
            <QuestionCard title={el.title} quest={el} handleClick={dispatchUserAnswer} />
          </div>
        );
      })}
      <div>
        {testFinised ? null : (
          <div>
            <button type="button" onClick={nextQuestionButton}>
              {questions.length === currentindex ? 'Finish Test' : 'Next Question'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PassTheTest;
