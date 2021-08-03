import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div>
        <div>
          <Link to="/">
            <button type="button">homepage</button>
          </Link>
          <Link to="cinema">
            <button type="button">cinema</button>
          </Link>
          <Link to="blocksgame">
            <button type="button">blocksgame</button>
          </Link>
        </div>
        {/* <div>log in</div> */}
      </div>
    </div>
  );
};

export default Navigation;
