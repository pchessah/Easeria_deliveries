import React from 'react';
import './App.css';
import {
  Router, Route, Switch, Redirect,
} from 'react-router-dom';
import PublicRoutes from './routes/publicRoutes';
import PrivateRoutes from './routes/privateRoutes';
import history from './util/history';
// import 'react-widgets/dist/css/react-widgets.css';

// const authentication = () => (JSON.parse(localStorage.getItem('roles')) ? (
//   <Redirect to="/app" />
// ) : (
//   <PublicRoutes />
// ));

const App = () => (
  <div>
    <Router history={history}>
      <Switch>
        <Route path="/app" component={PrivateRoutes} />
        <Route path="" component={PublicRoutes} />
      </Switch>
    </Router>
  </div>
);

export default App;
