import React from 'react';
import { NavLink } from 'react-router-dom';

import ShoppingCartContents from '../containers/ShoppingCartContents';

const ShoppingCart = () => {
  return (
    <div className="grid-container">
      <div className="grid-x grid-margin-x">
        <div className="small-12 medium-8 large-6 cell">
          <ShoppingCartContents context="main" edit={true} />
          <div className="button-group">
            <NavLink to="/" className="button success hollow"><i className="arrow arrow-left" />Verder met winkelen</NavLink>
            <NavLink to="/form" className="button success">Verder met bestellen<i className="arrow arrow-right" /></NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
