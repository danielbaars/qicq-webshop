import React from 'react';
import Product from './Product';

const ProductPage = (props) => {
  return (
    <div className="grid-container">
      <div className="grid-x grid-margin-x">
        <div className="small-12 medium-7 cell">
          <Product productId={props.match.params.id} product={props.data.qicqBikes[props.match.params.id]} sizes={props.data.frameSizes} options={props.data.stromerOptions} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
