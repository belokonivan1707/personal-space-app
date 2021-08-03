import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from './containers/navigation/navigation';
import Homepage from './pages/homepage/homepage';
import BlockGamepage from './pages/blocks-gamepage/block-gamepage';
import Cinemapage from './pages/cinemapage/cinemapage';
import LogInForm from './containers/log-in-form/log-in-form';

const App = () => {
  return (
    <div className="container">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/blocksgame" component={BlockGamepage} />
          <Route path="/cinema" component={Cinemapage} />
          <Route path="/login" component={LogInForm} />
          <Route path="/" component={Homepage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
