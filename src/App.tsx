import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Homepage from './pages/homepage/homepage';
import Cinemapage from './pages/cinemapage/cinemapage';
import LogInForm from './containers/log-in-form/log-in-form';

const App = () => {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/cinema" component={Cinemapage} />
          <Route path="/login" component={LogInForm} />
          <Route path="/" component={Homepage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
