import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedCategoryOfQuestions } from 'store/question/action';
import MenuItem from '../menu-item/menu-item';
import { Category } from '../questions-topics-menu/questions-topics-menu';
import style from './styles.module.css';

export interface Props {
  props: Category | Record<string, never>;
}

interface State {
  selected: boolean;
}

const QuestionsCategoriesMenu = ({ props }: Props) => {
  const { title, questions } = props;
  const dispatch = useDispatch();
  const [category, setCategory] = useState<State>({ selected: false });
  const { selected } = category;

  const choosedCategory = (value: keyof typeof questions) => {
    setCategory({ selected: true });
    dispatch(setSelectedCategoryOfQuestions(questions[value]));
  };

  return (
    <div className={style.menu}>
      <div>
        <p>
          Selected topic:
          <span>{title}</span>
        </p>
      </div>
      {selected ? null : <h1 className={style.title}>Choose the category:</h1>}
      {selected ? null : (
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
