import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './ProductList';
import Portfolio from './Portfolio';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={ProductList} />
      <Route path="/portfolio" component={Portfolio} />
    </Switch>
  </Router>
);

export default App;
