import { useLocation } from 'react-router-dom';

export interface LocationSatate {
  email: string;
}

const Welcomepage = () => {
  const location = useLocation<LocationSatate>();

  const { email } = location.state;

  return (
    <div>
      <h5>welcome page</h5>
      <p>
        <span>Hello, user: </span>
        {email}
      </p>
    </div>
  );
};

export default Welcomepage;
