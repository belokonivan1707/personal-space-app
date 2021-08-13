/* eslint-disable react/jsx-curly-newline */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-props-no-multi-spaces */
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth';

const PrivateRoute = ({ children }: any) => {
  const auth = useAuth();

  return (
    <Route
      render={({ location }) =>
        auth.user ? children : <Redirect to={{ pathname: '/signin', state: { from: location } }} />
      }
    />
  );
};

export default PrivateRoute;
