import React, { Suspense, useState } from 'react';
import style from './styles.module.css';

const ArticlesCard = React.lazy(() => import('components/articles/article-card/article-card'));

const ArticlesPage = () => {
  const [openArticlesMenu, setOpenArticlesMenu] = useState(false);
  return (
    <div className={style.container}>
      <p>articles</p>
      <button type="button" onClick={() => setOpenArticlesMenu(prev => !prev)}>
        click
      </button>
      <Suspense fallback={<div>Loading...</div>}>{openArticlesMenu ? <ArticlesCard /> : null}</Suspense>
    </div>
  );
};

export default React.memo(ArticlesPage);
