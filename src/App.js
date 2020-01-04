import React from 'react';
import './App.css';
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import Shop from "./components/Shop";
import Drink from "./components/Drink";
import Others from "./components/Others";
import Navbar from "./components/navbar";
import Food from "./components/Food";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
          <Navbar />
      <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={Aboutus} />
            <Route path="/shop" component={Shop} />
            <Route path="/food" component={Food} />
            <Route path="/drink" component={Drink} />
            <Route path="/others" component={Others} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;


