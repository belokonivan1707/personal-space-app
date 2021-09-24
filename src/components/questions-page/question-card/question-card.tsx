import { Questions } from 'store/question/data/data';
import style from './styles.module.css';

interface Props {
  handleClick: (event: any, id: number) => void;
  // handleClick: (event: React.MouseEvent<HTMLUListElement> | React.KeyboardEvent<HTMLUListElement>, id: number) => void;
  quest: Questions;
}

const QuestionCard = ({ handleClick, quest }: Props) => {
  const { id, question, first, second, third, fourth } = quest;

  return (
    <div className={style.questioncard}>
      <div>qestion card</div>
      <div>{question}</div>
      <ul onClick={event => handleClick(event, id)} onKeyDown={event => handleClick(event, id)} role="presentation">
        <li id="first">{first}</li>
        <li id="second">{second}</li>
        <li id="third">{third}</li>
        <li id="fourth">{fourth}</li>
      </ul>
    </div>
  );
};

export default QuestionCard;
// MouseEvent<HTMLUListElement, MouseEvent>
// React.ChangeEvent<HTMLInputElement>
