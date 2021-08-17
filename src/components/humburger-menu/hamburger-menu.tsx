import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from 'hooks/use-auth';
import style from './styles.module.css';

const HumburgerMenu = () => {
  const auth = useAuth();
  const [hamburger, setHamburger] = useState<boolean>(false);

  return (
    <>
      <div className={style.humburgerbox}>
        <div
          role="button"
          tabIndex={0}
          className={style.humburgerbutton}
          onClick={() => setHamburger(prev => !prev)}
          onKeyDown={() => setHamburger(prev => !prev)}
        >
          <span className={`${style.span} ${hamburger ? style.active : ''}`}> </span>
          <span className={`${style.span} ${hamburger ? style.active : ''}`}> </span>
          <span className={`${style.span} ${hamburger ? style.active : ''}`}> </span>
        </div>
      </div>

      <div className={`${hamburger ? `${style.menu}` : `${style.close}`}`}>
        <div className={style.itemlist}>
          <div className={style.item}>
            <Link to="/">
              <button className={style.link} type="button" onClick={() => setHamburger(prev => !prev)}>
                Home Page
              </button>
            </Link>
          </div>
          <div className={style.item}>
            <Link to="cinema">
              <button className={style.link} type="button" onClick={() => setHamburger(prev => !prev)}>
                Cinema
              </button>
            </Link>
          </div>
          <div className={style.item}>
            <Link to="books">
              <button className={style.link} type="button" onClick={() => setHamburger(prev => !prev)}>
                Books
              </button>
            </Link>
          </div>
          <div className={style.item}>
            <Link to="blocksgame">
              <button className={style.link} type="button" onClick={() => setHamburger(prev => !prev)}>
                Blocks Game
              </button>
            </Link>
          </div>
        </div>
        <div>
          {auth.user ? (
            <Link to="/signin">
              <button className={style.authbutton} type="button" onClick={() => auth.signout()}>
                Sign Out
              </button>
            </Link>
          ) : (
            <div>
              <Link to="/signup">
                <button className={style.authbutton} type="button" onClick={() => setHamburger(prev => !prev)}>
                  Sign Up
                </button>
              </Link>
              <Link to="/signin">
                <button className={style.authbutton} type="button" onClick={() => setHamburger(prev => !prev)}>
                  Sign In
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
      {hamburger ? (
        <div
          role="button"
          tabIndex={0}
          onClick={() => setHamburger(prev => !prev)}
          onKeyDown={() => setHamburger(prev => !prev)}
          className={style.menuBackground}
        />
      ) : null}
    </>
  );
};

export default HumburgerMenu;
