import QuestionsTopicsMenu from 'components/questions-page/questions-topics-menu/questions-topics-menu';
import { useDispatch, useSelector } from 'react-redux';
import { QuestionsStoreType, SelectorUserType } from 'store/question/types';
import PassTheTest from 'containers/pass-the-test/pass-the-test';
import style from './styles.module.css';
import { checkTheResult, chooseNewTopic } from '../../store/question/action';

const QuestionPage = () => {
  const dispatch = useDispatch();
  const currentTestInfo: SelectorUserType = useSelector<QuestionsStoreType, SelectorUserType>(
    state => state.questionsStore.user
  );
  const { selectedCategory, testBegin, testFinised, numbersOfCorrectAnswers } = currentTestInfo;

  return (
    <div className={style.questionpage}>
      <h1>Improve your knowledge with us</h1>

      {testBegin ? <PassTheTest questions={selectedCategory} /> : <QuestionsTopicsMenu />}
      {testFinised && numbersOfCorrectAnswers.length === 0 ? (
        <div>
          <h1>well done, you completed a test</h1>
          <button type="button" onClick={() => dispatch(checkTheResult())}>
            Check your result
          </button>
        </div>
      ) : null}
      {numbersOfCorrectAnswers.length !== 0 ? (
        <div>
          <p>Test result:</p>
          <div>
            {numbersOfCorrectAnswers.map(el => (
              <div key={el.id}>
                <span>{el.name}</span>
                <span>: </span>
                <span>{el.result}</span>
              </div>
            ))}
          </div>
          <div>
            <button type="button" onClick={() => dispatch(chooseNewTopic())}>
              Return to the topic menu:
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default QuestionPage;
