import React from 'react';
import Product from './Product';
// import ShoppingCart from '../containers/ShoppingCart';

const ProductPage = () => {
  return (
    <div className="grid-container">
      <div className="grid-x grid-margin-x">
        <div className="small-12 medium-7 cell">
          <Product />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
