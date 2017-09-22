/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
import { Switch, NavLink } from 'react-router-dom';
import ProductsOverviewPage from './ProductsOverviewPage';
import Product from './Product';
import CustomerInfoFormPage from '../containers/CustomerInfoFormPage';
import NextStep from './NextStep';
import ShoppingCart from '../components/ShoppingCart';
import NotFoundPage from './NotFoundPage';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="grid-container">
          <div className="grid-x grid-margin-x">
            <div className="small-12 cell">
              <div className="shop__nav">
                <NavLink exact to="/">Productoverzicht</NavLink>
                <NavLink to="/cart">Winkelmand</NavLink>
                <NavLink to="/form">1. Uw gegevens</NavLink>
                <NavLink to="/nextstep">2. Ontvangstwijze</NavLink>
              </div>
            </div>
          </div>
        </div>
        <Switch>
          <Route exact path="/" render={routeProps => <ProductsOverviewPage {...routeProps} data={this.props.data} />} />
          <Route path='/products/:id' render={routeProps => <Product {...routeProps} data={this.props.data} />} />
          <Route path="/form" component={CustomerInfoFormPage} />
          <Route path="/nextstep" component={NextStep} />
          <Route path="/cart" component={ShoppingCart} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
