import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCustomerInfo } from '../actions/formActions';
import { bindActionCreators } from 'redux';

import Content from '../components/Content';

import OrderForm from '../components/OrderForm';
import ShoppingCartContents from './ShoppingCartContents';

const CustomerInfoFormPage = (props) => {
  console.log('The props inside CustomerInfoFormPage are:', props);
  return (
    <Content contentClass='order-form'>
      <OrderForm onSubmit={props.addCustomerInfo} history={props.history} />
    </Content>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addCustomerInfo }, dispatch);
};

export default connect(null, mapDispatchToProps)(CustomerInfoFormPage);
