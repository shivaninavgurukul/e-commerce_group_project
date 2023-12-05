import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BooksPage from './BooksPage';
import BookIdComponent from './BookIdComponent';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={BooksPage} />
        <Route path="/books/:id" component={BookIdComponent} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
