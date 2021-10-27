import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from 'components/private-route/private-route';
import SignInForm from 'containers/sign-in-form/sign-in-form';
import SignUpForm from './containers/sign-up-form/sign-up-from';
import Homepage from './pages/homepage/homepage';
import Navigation from './containers/navigation/navigation';
import { ProvideAuth } from './hooks/use-auth';

const BooksPage = React.lazy(() => import('./pages/bookspage/bookspage'));
const QuestionPage = React.lazy(() => import('./pages/questionpage/questionpage'));
const ArticlesPage = React.lazy(() => import('./pages/articles/articles-page'));
const Blockspage = React.lazy(() => import('./pages/blockspage/blockspage'));
const Cinemapage = React.lazy(() => import('./pages/cinemapage/cinemapage'));
const Photopage = React.lazy(() => import('./pages/photopage/photopage'));

const Welcomepage = React.lazy(() => import('./pages/welcomepage/welcomepage'));

const Loader = () => {
  return (
    <div>
      <h1>LOADING...</h1>
    </div>
  );
};

const App = () => {
  return (
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
            <Route path="/questions" component={QuestionPage} />
            <Route path="/signup" component={SignUpForm} />
            <Route path="/signin" component={SignInForm} />

            <PrivateRoute path="/blocksgame">
              <Blockspage />
            </PrivateRoute>
            <PrivateRoute path="/articles">
              <ArticlesPage />
            </PrivateRoute>
          </Switch>
        </Suspense>
      </Router>
    </ProvideAuth>
  );
};

export default App;
