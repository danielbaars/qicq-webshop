import _ from 'lodash';
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';

import OffCanvasMenu from './OffCanvasMenu';
import ProductsOverviewPage from './ProductsOverviewPage';
import Product from './Product';
import CustomerInfoFormPage from '../containers/CustomerInfoFormPage';
import ShoppingCart from '../components/ShoppingCart';
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
            <Route component={NotFoundPage} />
          </Switch>
          <Footer />
        </OffCanvasMenu>
    );
  }
}

// App.propTypes = {
//   children: PropTypes.element
// };

export default App;
