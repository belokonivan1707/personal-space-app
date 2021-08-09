import { useState, useImperativeHandle, useRef } from 'react';
import { Link } from 'react-router-dom';
import style from './styles.module.css';

const HumburgerMenu = () => {
  const [state, setState] = useState<boolean>(false);
  console.log(state);

  return (
    <>
      <div className={style.button}>
        <button onClick={() => setState(prev => !prev)} type="button">
          open menu
        </button>
      </div>
      <div className={`${state ? `${style.menu}` : `${style.close}`}`}>
        <div className={style.itemlist}>
          <div className={style.item}>
            <Link to="/">
              <button className={style.link} type="button" onClick={() => setState(prev => !prev)}>
                Home Page
              </button>
            </Link>
          </div>
          <div className={style.item}>
            <Link to="cinema">
              <button className={style.link} type="button" onClick={() => setState(prev => !prev)}>
                Cinema
              </button>
            </Link>
          </div>
          <div className={style.item}>
            <Link to="blocksgame">
              <button className={style.link} type="button" onClick={() => setState(prev => !prev)}>
                Blocks Game
              </button>
            </Link>
          </div>
        </div>
        <div>
          <Link to="/">
            <button className={style.signin} type="button" onClick={() => setState(prev => !prev)}>
              Sign In
            </button>
          </Link>
        </div>
      </div>
      {state ? (
        <div
          role="button"
          tabIndex={0}
          onClick={() => setState(prev => !prev)}
          onKeyDown={() => setState(prev => !prev)}
          className={style.menuBackground}
        />
      ) : null}
    </>
  );
};

export default HumburgerMenu;
