import { Link } from 'react-router-dom';
import { useAuth } from 'hooks/use-auth';
import { TOP_MENU } from 'constant/consts';
import HumburgerMenu from '../../components/humburger-menu/hamburger-menu';
import style from './styles.module.css';

const Navigation = () => {
  const auth = useAuth();

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <HumburgerMenu />
        <div className={style.menubox}>
          <div className={style.menu}>
            {TOP_MENU.map(el => {
              return (
                <Link to={el.link} key={el.id}>
                  <button className={style.item} type="button">
                    {el.name}
                  </button>
                </Link>
              );
            })}
          </div>

          <div>
            {auth.user ? (
              <Link to="/signin">
                <button className={style.item} type="button" onClick={() => auth.signout()}>
                  Sign Out
                </button>
              </Link>
            ) : (
              <div>
                <Link to="/signup">
                  <button className={style.item} type="button">
                    Sign Up
                  </button>
                </Link>
                <Link to="/signin">
                  <button className={style.item} type="button">
                    Sign In
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
