import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { uniqBy } from 'lodash';
import { rolesConfig } from '../config/roles';
import * as Routes from './index';
import Navigation from '../components/client/adminHeader';
// import NotFound from '../components/NotFound';
import { useStyles } from '../components/client/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const PrivateRoutes = (props) => {
  const [allowedRoutes, setAllowed] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    let roles = JSON.parse(localStorage.getItem('roles'));
    if (roles) {
      roles = ['common', ...roles];

      let allowedRoutes = roles.reduce((acc, role) => [...acc, ...rolesConfig[role].routes], []);

      // For removing duplicate entries, compare with 'url'.
      allowedRoutes = uniqBy(allowedRoutes, 'url');
      setAllowed([...allowedRoutes]);
    } else {
      props.history.push('/');
    }
  }, [props.history]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navigation  />  
      <main className={classes.content}>
      <div className={classes.appBarSpacer} />
        <Switch>
          {allowedRoutes.map((route) => (
            <Route
              exact
              key={route.url}
              component={Routes[route.component]}
              path={`${props.match.path}${route.url}`}
            />
          ))}
          {/* <Route component={NotFound} /> */}
        </Switch>
      </main>
    </div>
  );
};

export default PrivateRoutes;
