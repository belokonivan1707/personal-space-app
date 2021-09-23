// import { useState } from 'react';
import { useState } from 'react';
import { Questions } from 'store/question/data/data';
import MenuItem from '../menu-item/menu-item';
import { Category } from '../questions-topics-menu/questions-topics-menu';
import style from './styles.module.css';

export interface Props {
  props: Category | Record<string, never>;
}

interface State {
  choosed: boolean;
  quest: [] | Questions[];
}

const QuestionsCategoriesMenu = ({ props }: Props) => {
  const { title, questions } = props;

  const [category, setCategory] = useState<State>({ choosed: false, quest: [] });
  const { choosed, quest } = category;

  const choosedCategory = (value: keyof typeof questions) => {
    setCategory({ choosed: true, quest: questions[value] });
  };

  return (
    <div className={style.menu}>
      <h1>{title}</h1>
      {choosed ? (
        <div>
          {quest.map((el: any) => {
            return <p key={el.id}>{el.question}</p>;
          })}
          <p>hello</p>
        </div>
      ) : (
        <ul>
          {Object.keys(questions).map(el => {
            return <MenuItem key={el} title={el} handleClick={choosedCategory} />;
          })}
        </ul>
      )}
    </div>
  );
};

export default QuestionsCategoriesMenu;
