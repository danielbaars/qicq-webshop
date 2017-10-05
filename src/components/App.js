import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';

import ProductsOverviewPage from './ProductsOverviewPage';
import Product from './Product';
import CustomerInfoFormPage from '../containers/CustomerInfoFormPage';
import ShoppingCart from '../components/ShoppingCart';
import NotFoundPage from './NotFoundPage';

import Masthead from './Masthead';
import Footer from './Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Masthead />
        <Switch>
          <Route exact path="/" render={routeProps => <ProductsOverviewPage {...routeProps} data={this.props.data} />} />
          <Route path='/products/:id' render={routeProps => <Product {...routeProps} data={this.props.data} />} />
          <Route path="/form" component={CustomerInfoFormPage} />
          <Route path="/cart" component={ShoppingCart} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
