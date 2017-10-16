import React from 'react';
import { connect } from 'react-redux';
import { addCustomerInfo } from '../actions/formActions';
import { bindActionCreators } from 'redux';

import Content from '../components/Content';

import OrderForm from '../components/OrderForm';

const CustomerInfoFormPage = (props) => {
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
