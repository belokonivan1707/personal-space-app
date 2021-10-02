import ArticlesCard from 'components/articles/article-card/article-card';
import style from './styles.module.css';

const ArticlesPage = () => {
  return (
    <div className={style.container}>
      <p>articles</p>
      <ArticlesCard />
    </div>
  );
};

export default ArticlesPage;
