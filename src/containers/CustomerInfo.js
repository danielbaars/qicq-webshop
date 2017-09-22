import React, { Component } from 'react';
import {connect} from 'react-redux';

const CustomerInfo = (props) => {
  const your = props.customerInfo;
  return (
    <div className="card card--sidebar customer-details">
      <div className="card__header card-divider">Uw gegevens</div>
      <div className="card-section">
        <div className="grid-x">
          <div className="medium-6 cell">
            <div>
              {your.firstName} {your.lastName}<br/>
              {your.streetName} {your.houseNumber} {your.houseNumberAddition ? your.houseNumberAddition : ''}<br/>
              {your.zipCode} {your.city}<br/>
              {your.country}
            </div>
          </div>
          <div className="medium-6 cell">
            <div>
              {your.emailAddress}<br/>
              {your.phoneNumber}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    customerInfo: state.customerInfo
  };
};

export default connect(mapStateToProps)(CustomerInfo);
