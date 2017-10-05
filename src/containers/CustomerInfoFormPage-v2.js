import React from 'react';

import CustomerInfoForm from './CustomerInfoForm';
import ShoppingCartContents from '../containers/ShoppingCartContents';

const CustomerInfoFormPage = props => {
  const { handleSubmit } = props;
  return (
    <div className="grid-container">
      <div className="grid-x grid-margin-x">
        <div className="small-12 medium-7 cell">
          <CustomerInfoForm onSubmit={handleSubmit} />
        </div>
        <div className="small-12 medium-5 cell">
          <ShoppingCartContents context="sidebar" edit={false} />
        </div>
      </div>
    </div>
  );
};

export default CustomerInfoFormPage;
