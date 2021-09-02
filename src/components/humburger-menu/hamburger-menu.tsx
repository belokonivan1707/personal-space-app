import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TOP_MENU } from 'constant/consts';
import style from './styles.module.css';
// import { useAuth } from 'hooks/use-auth';

const HumburgerMenu = () => {
  // const auth = useAuth();
  const [hamburger, setHamburger] = useState<boolean>(false);
  useEffect(() => {
    if (hamburger) {
      document.body.style.overflow = 'hidden';
    }

    if (!hamburger) {
      document.body.style.overflow = 'scroll';
    }
  }, [hamburger]);

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
          {TOP_MENU.map(el => {
            return (
              <div className={style.item} key={el.id}>
                <Link to={el.link}>
                  <button className={style.link} type="button" onClick={() => setHamburger(prev => !prev)}>
                    {el.name}
                  </button>
                </Link>
              </div>
            );
          })}
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

/*  <div>
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
</div> */
