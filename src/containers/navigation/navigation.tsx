import { Link } from 'react-router-dom';
import HumburgerMenu from '../../components/humburger-menu/hamburger-menu';
import style from './styles.module.css';

const Navigation = () => {
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
        </div>
        {/* <div>log in</div> */}
      </div>
    </div>
  );
};

export default Navigation;
