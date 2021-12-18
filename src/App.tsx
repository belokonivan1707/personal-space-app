/* eslint-disable import/order */
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from './containers/navigation/navigation';
import Homepage from './pages/homepage/homepage';
import BooksPage from './pages/bookspage/bookspage';
import Photopage from './pages/photopage/photopage';
import Loader from 'components/loader/loader';
import SignInForm from 'containers/sign-in-form/sign-in-form';
import SignUpForm from './containers/sign-up-form/sign-up-from';

import { ProvideAuth } from './hooks/use-auth';
import PrivateRoute from 'components/private-route/private-route';

const Cinemapage = React.lazy(() => import('./pages/cinemapage/cinemapage'));
const Welcomepage = React.lazy(() => import('./pages/welcomepage/welcomepage'));
const MoneyManager = React.lazy(() => import('./pages/money-manager/money-manager'));

const testString = 'Fucking bad news! Always the same! p.s: this string from use context';
export const TestUseContextStore = React.createContext(testString);

const App = () => {
  return (
    <TestUseContextStore.Provider value={testString}>
      <ProvideAuth>
        <Router>
          <Navigation />
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/books" component={BooksPage} />
              <Route path="/photos" component={Photopage} />
              <Route path="/cinema" component={Cinemapage} />
              <Route path="/welcome" component={Welcomepage} />
              <Route path="/signup" component={SignUpForm} />
              <Route path="/signin" component={SignInForm} />

              <PrivateRoute path="/moneymanager">
                <MoneyManager />
              </PrivateRoute>

              {/* <PrivateRoute path="/blocksgame">
                <Blockspage />
              </PrivateRoute> */}
              {/* <PrivateRoute path="/questions">
                <QuestionPage />
              </PrivateRoute> */}
              {/* <PrivateRoute path="/articles">
                <ArticlesPage />
              </PrivateRoute> */}
            </Switch>
          </Suspense>
        </Router>
      </ProvideAuth>
    </TestUseContextStore.Provider>
  );
};

export default App;
