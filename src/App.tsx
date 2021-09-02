import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from 'components/private-route/private-route';
import BooksPage from 'pages/bookspage/bookspage';
import SignInForm from 'containers/sign-in-form/sign-in-form';
import { ProvideAuth } from './hooks/use-auth';
import Homepage from './pages/homepage/homepage';
import Blockspage from './pages/blockspage/blockspage';
import Cinemapage from './pages/cinemapage/cinemapage';
import Photopage from './pages/photopage/photopage';
import Welcomepage from './pages/welcomepage/welcomepage';
import SignUpForm from './containers/sign-up-form/sign-up-from';
import Navigation from './containers/navigation/navigation';

const App = () => {
  return (
    <ProvideAuth>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/books" component={BooksPage} />
          <Route path="/photos" component={Photopage} />
          <Route path="/cinema" component={Cinemapage} />
          <Route exact path="/" component={Homepage} />
          <Route path="/welcome" component={Welcomepage} />
          <Route path="/signin" component={SignInForm} />
          <Route path="/signup" component={SignUpForm} />

          <PrivateRoute path="/blocksgame">
            <Blockspage />
          </PrivateRoute>
        </Switch>
      </Router>
    </ProvideAuth>
  );
};

export default App;
