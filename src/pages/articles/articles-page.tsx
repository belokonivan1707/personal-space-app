import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ArticlesDataTypes } from 'store/articles/data/data';
import { ArticlesStoreTypes } from 'store/articles/types';
import ArticlesCard from 'components/articles/article-card/article-card';
import style from './styles.module.css';

interface Props {
  removeSettings: () => void;
  showArticles: () => void;
}

const Settings = ({ removeSettings, showArticles }: Props) => {
  const [inputPassword, setInputPassword] = useState('');

  const checkPassword = () => {
    if (inputPassword === process.env.REACT_APP_ARTICLES_KEY) {
      showArticles();
    }
  };

  return (
    <div className={style.settings}>
      <h5>Enter password for watching this articles</h5>
      <input type="password" value={inputPassword} onChange={e => setInputPassword(() => e.target.value)} />
      <button type="button" onClick={checkPassword} onKeyPress={checkPassword}>
        Enter
      </button>

      <button type="button" onClick={removeSettings} onKeyPress={checkPassword}>
        Remove Settings
      </button>
    </div>
  );
};

const ArticlesPage = () => {
  const articlesEN = useSelector<ArticlesStoreTypes, ArticlesDataTypes[]>(state => state.articlesStore.articlesEN);
  const articlesRU = useSelector<ArticlesStoreTypes, ArticlesDataTypes[]>(state => state.articlesStore.articles);
  const [hideSettings, setHideSetting] = useState(true);
  const [showSecretNotes, setShowSecretNotes] = useState(false);
  const [showFreeNotes, setFreeNotes] = useState(false);

  const chooseCategory = (e: React.MouseEvent<HTMLLIElement, MouseEvent> | React.KeyboardEvent<HTMLLIElement>) => {
    const category: string = e.currentTarget.id;
    if (category === 'secret') {
      setHideSetting(() => false);
    }

    if (category === 'free') {
      setFreeNotes(() => true);
    }
  };

  const removeHideSettings = () => {
    setHideSetting(() => true);
  };

  const showHiddenArticles = () => {
    setShowSecretNotes(() => true);
  };

  return (
    <div className={style.container}>
      <div className={style.articles_navigation}>
        <ul className={style.menu}>
          <li
            id="free"
            tabIndex={0}
            role="menuitem"
            className={style.menu_item}
            onClick={e => chooseCategory(e)}
            onKeyPress={e => chooseCategory(e)}
          >
            <span className={style.menu_item_link}>ArticlesEN</span>
          </li>
          <li
            id="secret"
            tabIndex={0}
            role="menuitem"
            className={style.menu_item}
            onClick={e => chooseCategory(e)}
            onKeyPress={e => chooseCategory(e)}
          >
            <span className={style.menu_item_link}>ArticlesRU</span>
          </li>
        </ul>
        {hideSettings ? null : <Settings removeSettings={removeHideSettings} showArticles={showHiddenArticles} />}
      </div>
      <div className={style.articles_box}>
        <div>
          {showFreeNotes && <h3 className={style.category_title}>Articles</h3>}
          {showFreeNotes &&
            articlesEN.map(article => {
              return <ArticlesCard key={article.id} article={article} />;
            })}
        </div>
        <div>
          {showSecretNotes && <h3 className={style.category_title}>Secret Articles</h3>}
          <div>
            {showSecretNotes &&
              articlesRU.map(article => {
                return <ArticlesCard key={article.id} article={article} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;
