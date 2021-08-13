import { useLocation } from 'react-router-dom';

export interface Location {
  state: {
    email: string;
  };
}

const Welcomepage = () => {
  const location = useLocation();

  const { email }: any = location.state;

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
