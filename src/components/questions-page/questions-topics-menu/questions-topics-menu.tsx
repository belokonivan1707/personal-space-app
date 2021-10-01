import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Questions, QuestionsJsType } from 'store/question/data/data';
import { QuestionsStoreType } from 'store/question/types';
import QuestionsCategoriesMenu from '../questions-categories-menu/questions-categories-menu';
import MenuItem from '../menu-item/menu-item';
// import style from './styles.module.css';

export interface Category {
  id: number;
  title: string;

  questions: {
    functions: Questions[];
    arrays: Questions[];
  };
}

interface TopicState {
  display: string;
  categories: Category | Record<string, never>;
}

interface QuestionsSelector {
  JavaScript: QuestionsJsType;
  CSS: QuestionsJsType;
  HTML: QuestionsJsType;
}

const QuestionsTopicsMenu = () => {
  const topicsStore: QuestionsSelector = useSelector<QuestionsStoreType, QuestionsSelector>(
    state => state.questionsStore.questions
  );

  const [topic, setTopic] = useState<TopicState>({ display: 'topics-menu', categories: {} });
  const { display, categories } = topic;

  const openTopic = (chosenTopic: keyof typeof topicsStore) => {
    setTopic({ display: 'category-menu', categories: topicsStore[chosenTopic] });
  };

  return (
    <div>
      {display === 'topics-menu' ? (
        <div>
          <h1>Choose topic and pass a test:</h1>
          <ul>
            {Object.keys(topicsStore).map(el => (
              <MenuItem key={el} title={el} handleClick={openTopic} />
            ))}
          </ul>
        </div>
      ) : null}

      {display === 'category-menu' ? <QuestionsCategoriesMenu props={categories} /> : null}
    </div>
  );
};

export default QuestionsTopicsMenu;
