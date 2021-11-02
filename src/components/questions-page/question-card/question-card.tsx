import { Questions } from 'store/question/data/data';
import style from './styles.module.css';

interface Props {
  handleClick: (questionID: number, answerID: number) => void;
  quest: Questions;
  title: string;
}

const QuestionCard = ({ handleClick, quest, title }: Props) => {
  const { id, question, answerOption } = quest;

  return (
    <div className={style.questioncard}>
      <div>
        <h3>{question}</h3>
        <span>{title}</span>
      </div>
      <ul>
        {answerOption.map(answer => {
          return (
            <div key={answer.id}>
              <label>
                <input type="checkbox" onClick={() => handleClick(id, answer.id)} />
                {answer.option}
              </label>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default QuestionCard;
