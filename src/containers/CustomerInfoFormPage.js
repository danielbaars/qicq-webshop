import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCustomerInfo } from '../actions/formActions';
import { bindActionCreators } from 'redux';
// import { withRouter } from 'react-router-dom';
// import { Link, browserHistory } from 'react-router';

import OrderForm from '../components/OrderForm';
import ShoppingCartContents from './ShoppingCartContents';



const CustomerInfoFormPage = (props) => {
  console.log('The props inside CustomerInfoFormPage are:', props);
  return (
    <div className="grid-container">
      <div className="grid-x grid-margin-x">
        <div className="small-12 medium-12 cell">
          <OrderForm onSubmit={props.addCustomerInfo} history={props.history} />
        </div>
        {/* <div className="small-12 medium-5 cell">
          <ShoppingCartContents context="sidebar" edit={false} />
        </div> */}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addCustomerInfo }, dispatch);
};

export default connect(null, mapDispatchToProps)(CustomerInfoFormPage);
