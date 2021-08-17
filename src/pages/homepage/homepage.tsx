import { Link } from 'react-router-dom';
import style from './styles.module.css';

const Homepage = () => {
  return (
    <div className={style.homepage}>
      <h3>homepage</h3>
      <div>
        <Link to="/">
          <button type="button">Home Page</button>
        </Link>
        <Link to="cinema">
          <button type="button">Cinema</button>
        </Link>
        <Link to="blocksgame">
          <button type="button">Blocks Game</button>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
