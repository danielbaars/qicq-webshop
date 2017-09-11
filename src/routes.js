import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import ProductPage from './components/ProductPage';
import ShoppingCart from './containers/ShoppingCart'; // eslint-disable-line import/no-named-as-default
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ProductPage}/>
    <Route path="cart" component={ShoppingCart}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
