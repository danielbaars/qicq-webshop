import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCustomerInfo } from '../actions/formActions';
import { bindActionCreators } from 'redux';
// import { withRouter } from 'react-router-dom';
// import { Link, browserHistory } from 'react-router';

import CustomerInfoForm from './CustomerInfoForm';
import ShoppingCartContents from '../containers/ShoppingCartContents';



const CustomerInfoFormPage = (props) => {
  // const SubmitForm = withRouter( ({ history }) => (
  //   <CustomerInfoForm onSubmit={props.addCustomerInfo} initialValues={{history: history}} />
  // ));
  const testSubmit = () => {
    console.log('TEST SUBMIT!', props);
    // store.dispatch(push('/nextstep'));
    props.history.push('/nextstep');
    // props.addCustomerInfo;
  };
  return (
    <div className="grid-container">
      <div className="grid-x grid-margin-x">
        <div className="small-12 medium-7 cell">
          {/* <SubmitForm /> */}
          <CustomerInfoForm onSubmit={props.addCustomerInfo(props.history)} />
          {/* <CustomerInfoForm onSubmit={testSubmit} /> */}
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
