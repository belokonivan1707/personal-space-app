import QuestionsTopicsMenu from 'components/questions-page/questions-topics-menu/questions-topics-menu';
import { useDispatch, useSelector } from 'react-redux';
import { QuestionsStoreType } from 'store/question/types';
import { Questions } from 'store/question/data/data';
import PassTheTest from 'containers/pass-the-test/pass-the-test';
import style from './styles.module.css';
import { checkTheResult } from '../../store/question/action';

interface SelectorType {
  selectedCategory: Questions[];
  testBegin: boolean;
  testFinised: boolean;
}

const QuestionPage = () => {
  const dispatch = useDispatch();
  const selectedTestInfo: SelectorType = useSelector<QuestionsStoreType, SelectorType>(
    state => state.questionsStore.user
  );
  const { selectedCategory, testBegin, testFinised } = selectedTestInfo;

  return (
    <div className={style.questionpage}>
      <h1>Improve your knowledge with us</h1>

      <QuestionsTopicsMenu />
      {testBegin ? <PassTheTest questions={selectedCategory} /> : null}
      {testFinised ? (
        <div>
          <h1>well done, you completed a test</h1>
          <button type="button" onClick={() => dispatch(checkTheResult())}>
            Check your result
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default QuestionPage;
