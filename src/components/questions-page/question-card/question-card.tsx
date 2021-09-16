import { useState } from 'react';
import style from './styles.module.css';

const QuestionCard = ({ props }: any) => {
  // const {question} = props
  const [counter, setCounter] = useState({ lastindex: 0, currentindex: 1 });

  return (
    <div className={style.questioncard}>
      <div>qestion card</div>
      {props.slice(counter.lastindex, counter.currentindex).map((el: any) => {
        return (
          <div key={el.id}>
            <h3>{el.question}</h3>
            <button
              type="button"
              onClick={() => setCounter({ lastindex: counter.lastindex + 1, currentindex: counter.currentindex + 1 })}
            >
              {el['1']}
            </button>
            <button type="button">{el['2']}</button>
            <button type="button">{el['3']}</button>
            <button type="button">{el['4']}</button>
          </div>
        );
      })}
    </div>
  );
};

export default QuestionCard;
