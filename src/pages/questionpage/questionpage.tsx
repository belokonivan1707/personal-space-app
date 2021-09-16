import QuestionsTopicsMenu from 'components/questions-page/questions-topics-menu/questions-topics-menu';
import style from './styles.module.css';

const QuestionPage = () => {
  return (
    <div className={style.questionpage}>
      <h1>Improve your knowledge with us</h1>
      <h1>Choose topic and take a test</h1>
      <QuestionsTopicsMenu />
    </div>
  );
};

export default QuestionPage;
