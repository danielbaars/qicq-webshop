import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import ProductsOverviewPage from './components/ProductsOverviewPage';
import Product from './components/Product';
import ShoppingCart from './components/ShoppingCart';
import CustomerInfoFormPage from './containers/CustomerInfoFormPage';
import ThankYouPage from './containers/ThankYouPage';
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ProductsOverviewPage}/>
    <Route path="products/:id" component={Product} />
    <Route path='/form' component={CustomerInfoFormPage} />
    <Route path='/cart' component={ShoppingCart} />
    <Route path='/thank-you' component={ThankYouPage} />
    <Route component={NotFoundPage} />
  </Route>
);
