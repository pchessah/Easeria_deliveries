import React from "react";
import "./App.css";
import { Router, Route, Switch } from "react-router-dom";
import PublicRoutes from "./routes/publicRoutes";
import PrivateRoutes from "./routes/privateRoutes";
import history from "./util/history";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer} from 'react-toastify';

const App = () => (
  <div style={{ maxWidth: "100vw" }}>
    <Router history={history}>
      <ToastContainer autoClose={1500}/>
      <Switch>
        <Route path="/app" component={PrivateRoutes} />
        <Route path="" component={PublicRoutes} />
      </Switch>
    </Router>
  </div>
);

export default App;
