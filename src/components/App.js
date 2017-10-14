import React, { Component } from 'react';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';

import OffCanvasMenu from './OffCanvasMenu';
import ProductsOverviewPage from './ProductsOverviewPage';
import Product from './Product';
import CustomerInfoFormPage from '../containers/CustomerInfoFormPage';
import ShoppingCart from './ShoppingCart';
import ThankYouPage from '../containers/ThankYouPage';
import NotFoundPage from './NotFoundPage';

import Masthead from './Masthead';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <OffCanvasMenu>
        <Masthead />
        <Switch>
          <Route exact path='/' render={routeProps => <ProductsOverviewPage {...routeProps} data={this.props.data} />} />
          <Route path='/products/:id' render={routeProps => <Product {...routeProps} data={this.props.data} />} />
          <Route path='/form' component={CustomerInfoFormPage} />
          <Route path='/cart' component={ShoppingCart} />
          <Route path='/thank-you' component={ThankYouPage} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </OffCanvasMenu>
    );
  }
}

export default App;
