import React, { Component } from 'react';
import TestForm from './Form';

import ShoppingCartContents from '../containers/ShoppingCartContents';

function showValues(values) {
  console.log(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
}

const TestFormPage = () => {
  return (
    <div className="grid-container">
      <div className="grid-x grid-margin-x">
        <div className="small-12 medium-7 cell">
          <TestForm onSubmit={showValues} />
        </div>
        <div className="small-12 medium-5 cell">
          <ShoppingCartContents className="form-page" edit={false} />
        </div>
      </div>
    </div>
  );
}

export default TestFormPage;
