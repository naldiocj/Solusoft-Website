import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import logo from './assets/logo-solusoft.png'
import './global.css'
import Home from './pages/Home';
import Appbar from './components/UI/Appbar';

function App() {
  return (
    <Fragment>
      <Router>
        <Appbar />
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
