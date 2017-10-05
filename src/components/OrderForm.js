import React, { Component } from 'react';

import Row from './Row';
import CustomerInfoForm from '../containers/CustomerInfoForm';
import DeliveryOptionsForm from '../containers/DeliveryOptionsForm';
import ShoppingCartContents from '../containers/ShoppingCartContents';

class OrderForm extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1
    }
  }
  nextPage() {
    this.setState({
      page: this.state.page + 1
    });
  }
  previousPage() {
    this.setState({
      page: this.state.page - 1
    });
  }
  render() {
    const { onSubmit } = this.props;
    const { page } = this.state;
    return (
      <Row>
        <div className='small-12 medium-7 cell'>
          {
            page === 1 &&
            <CustomerInfoForm onSubmit={this.nextPage} />
          }
          {
            page === 2 &&
            <DeliveryOptionsForm previousPage={this.previousPage} onSubmit={onSubmit} history={this.props.history} />
          }
        </div>
        <div className='small-12 medium-5 cell'>
          <div className='cart card'>
            <div className='cart__header card__header card-divider'>Overzicht bestelling</div>
            <div className='cart__contents card-section'>
              <ShoppingCartContents context='sidebar' />
            </div>
          </div>
        </div>
      </Row>
    );
  }
}

export default OrderForm;
