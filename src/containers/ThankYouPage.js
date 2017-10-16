import React, { Component } from 'react';
import { connect } from 'react-redux';

import Content from '../components/Content';
import Row from '../components/Row';
import ShoppingCartContents from './ShoppingCartContents';

class ThankYouPage extends Component {
  render() {
    const your = this.props.customerInfo;
    return (
      <Content contentClass='thank-you-page'>
        <Row>
          <div className='small-12 cell'>
            <h1 className='page-title thank-you__title'>Bedankt voor uw bestelling!</h1>
            <div className="card card--sidebar thank-you__customer">
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
            <div className="card card--sidebar thank-you__order">
              <div className="card__header card-divider">Uw bestelling</div>
              <div className="card-section">
                <ShoppingCartContents context='thank-you-page' cartOpen={true} />
              </div>
            </div>
          </div>
        </Row>
      </Content>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    customerInfo: state.customerInfo
  };
};

export default connect(mapStateToProps)(ThankYouPage);
