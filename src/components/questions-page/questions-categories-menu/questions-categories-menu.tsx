import { useState } from 'react';
import style from './styles.module.css';

const QuestionsCategoriesMenu = () => {
  const [counter, setCounter] = useState({ lastindex: 0, currentindex: 1 });

  return <div className={style.menu} />;
};

export default QuestionsCategoriesMenu;
