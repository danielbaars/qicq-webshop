import React from 'react';

import ShoppingCartContents from '../containers/ShoppingCartContents';
import CustomerInfo from '../containers/CustomerInfo';

const NextStep = (props) => {
  return (
    <div className="grid-container">
      <div className="grid-x grid-margin-x">
        <div className="small-12 medium-7 cell">
          <h1 className="order-step__header">
            <span className="order-step__number">2.</span>
            Hoe wilt u uw bestelling ontvangen?
          </h1>
        </div>
        <div className="small-12 medium-5 cell">
          <ShoppingCartContents context="sidebar" edit={false} />
          <CustomerInfo />
        </div>
      </div>
    </div>
  );
};

export default NextStep;
