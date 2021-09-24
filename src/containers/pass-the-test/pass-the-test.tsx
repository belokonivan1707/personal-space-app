import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAnswerOnQuestion, setTestFinished } from 'store/question/action';
import { Questions } from 'store/question/data/data';
import QuestionCard from 'components/questions-page/question-card/question-card';
import style from './styles.module.css';

interface Props {
  questions: Questions[];
}

const PassTheTest = ({ questions }: Props) => {
  const dispatch = useDispatch();
  const [counter, setCounter] = useState({ lastindex: 0, currentindex: 1 });
  const { lastindex, currentindex } = counter;

  const test = (e: any, id: number) => {
    setCounter({ lastindex: lastindex + 1, currentindex: currentindex + 1 });

    dispatch(setAnswerOnQuestion({ answer: e.target.id, questionId: id }));
    if (questions.length === currentindex) {
      dispatch(setTestFinished());
    }
  };

  return (
    <div className={style.questioncard}>
      <div>PassTheTest</div>
      {questions.slice(lastindex, currentindex).map((el: Questions) => {
        return <QuestionCard key={el.id} quest={el} handleClick={test} />;
      })}
    </div>
  );
};

export default PassTheTest;
// React.MouseEvent<HTMLUListElement> | React.KeyboardEvent<HTMLUListElement> | React.EventTarget
