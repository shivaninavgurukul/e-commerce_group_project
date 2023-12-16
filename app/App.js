// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Product from './Product';
import SingleBook from './SingleBook';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Product} />
        <Route exact path="/single_book/:id" component={SingleBook} />
      </Switch>
    </Router>
  );
};

export default App;
