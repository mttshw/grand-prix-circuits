import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './App';
import Home from './components/home';
import Years from './components/years';
import Circuits from './components/circuits';
import CircuitDetail from './components/circuitdetail';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={Home} />
      <Route path="years" component={Years} />
      <Route path="circuits" component={Circuits} />
        <Route path="/circuit/:id" component={CircuitDetail} />
    </Route>
  </Router>,
  document.getElementById('root')
);
