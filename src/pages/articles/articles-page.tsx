// import React, { Suspense, useState } from 'react';
import { useSelector } from 'react-redux';
import { ArticlesDataTypes } from 'store/articles/data/data';
import { ArticlesStoreTypes } from 'store/articles/types';
import ArticlesCard from 'components/articles/article-card/article-card';
import style from './styles.module.css';

// const ArticlesCard = React.lazy(() => import('components/articles/article-card/article-card'));

const ArticlesPage = () => {
  // const [openArticlesMenu, setOpenArticlesMenu] = useState(false);
  const articlesEN = useSelector<ArticlesStoreTypes, ArticlesDataTypes[]>(state => state.articlesStore.articlesEN);

  return (
    <div className={style.container}>
      <div>
        {articlesEN.map(article => {
          return <ArticlesCard key={article.id} article={article} />;
        })}
      </div>
      {/* <button type="button" onClick={() => setOpenArticlesMenu(prev => !prev)}>
        click
      </button> */}
      {/* <Suspense fallback={<div>Loading...</div>}>{openArticlesMenu ? <ArticlesCard /> : null}</Suspense> */}
    </div>
  );
};

export default ArticlesPage;
