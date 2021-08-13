import { Link } from 'react-router-dom';
import { useAuth } from 'hooks/use-auth';
import HumburgerMenu from '../../components/humburger-menu/hamburger-menu';
import style from './styles.module.css';

const Navigation = () => {
  const auth = useAuth();

  return (
    <div>
      <div className={style.navigation}>
        <div className={style.huburgerMenuBox}>
          <HumburgerMenu />
        </div>
        <div className={style.menu}>
          <Link to="/">
            <button className={style.item} type="button">
              Home Page
            </button>
          </Link>
          <Link to="cinema">
            <button className={style.item} type="button">
              Cinema
            </button>
          </Link>
          <Link to="blocksgame">
            <button className={style.item} type="button">
              Blocks Game
            </button>
          </Link>
          <Link to="books">
            <button className={style.item} type="button">
              Books
            </button>
          </Link>
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
  );
};

export default Navigation;
