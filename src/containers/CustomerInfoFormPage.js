import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCustomerInfo } from '../actions/formActions';
import { bindActionCreators } from 'redux';
import CustomerInfoForm from './CustomerInfoForm';

import ShoppingCartContents from '../containers/ShoppingCartContents';

const CustomerInfoFormPage = (props) => {
  return (
    <div className="grid-container">
      <div className="grid-x grid-margin-x">
        <div className="small-12 medium-7 cell">
          <CustomerInfoForm onSubmit={props.addCustomerInfo} />
        </div>
        <div className="small-12 medium-5 cell">
          <ShoppingCartContents context="sidebar" edit={false} />
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addCustomerInfo }, dispatch);
};

export default connect(null, mapDispatchToProps)(CustomerInfoFormPage);
