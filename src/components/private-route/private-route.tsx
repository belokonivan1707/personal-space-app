import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';

// interface IAuthRouteProps {
//   children: ReactNode;

//   // any other props that come into the component
// }

// export interface IRoute {
//   path: string;
//   exact: boolean;
//   component: any;
//   name: string; // Used to update page infon and title.
//   protected: boolean; // This will defines if the route is proteted or not
// }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PrivateRoute = ({ children }: any) => {
  // console.log(children);
  const auth = useAuth();

  return (
    <Route
      render={
        ({ location }) =>
          // eslint-disable-next-line prettier/prettier
          auth.user ? children : <Redirect to={{ pathname: '/signin', state: { from: location } }} />
        // eslint-disable-next-line react/jsx-curly-newline
      }
    />
  );
};

export default PrivateRoute;
