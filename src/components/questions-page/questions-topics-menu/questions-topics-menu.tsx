import { useState } from 'react';
import { useSelector } from 'react-redux';
// import { QuestionsStoreType } from 'store/question/types';
import { QuestionsStoreType, QuestionsInitialType } from 'store/question/types';
import MenuItem from '../menu-item/menu-item';
import QuestionsCategoriesMenu from '../questions-categories-menu/questions-categories-menu';
import style from './styles.module.css';

// export interface QuestionStoreType {
//   // questionsStore: { questionsJs: QuestionsJsType[] };
// }

const QuestionsTopicsMenu = () => {
  const topicsStore: QuestionsInitialType = useSelector<QuestionsStoreType, QuestionsInitialType>(
    state => state.questionsStore
  );

  const [topic, setTopic] = useState({ display: 'topics-menu', topic: {} });
  const { display } = topic;

  const openTopic = (chosenTopic: keyof typeof topicsStore) => {
    setTopic({ display: 'category-menu', topic: topicsStore[chosenTopic] });
  };

  return (
    <div>
      {display === 'topics-menu' ? (
        <div>
          <h2>Topics Menu</h2>
          <ul>
            {Object.keys(topicsStore).map(el => (
              <MenuItem key={el} title={el} handleClick={openTopic} />
            ))}
          </ul>
        </div>
      ) : null}

      {display === 'category-menu' ? <QuestionsCategoriesMenu /> : null}
    </div>
  );
};

export default QuestionsTopicsMenu;
