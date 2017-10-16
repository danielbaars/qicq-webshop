import React, { Component } from 'react';
import Responsive from 'react-responsive';

const Small = ({ children }) => <Responsive maxWidth={767} children={children} />;
const Medium = ({ children }) => <Responsive minWidth={768} children={children} />;

import Row from './Row';
import CustomerInfoForm from '../containers/CustomerInfoForm';
import ShoppingCartContents from '../containers/ShoppingCartContents';

class OrderForm extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      // page: 1,
      cartOpen: false
    }
  }
  nextPage() {
    this.setState({
      // page: this.state.page + 1
    });
  }
  previousPage() {
    this.setState({
      // page: this.state.page - 1
    });
  }
  toggleCart() {
    this.setState({
      cartOpen: !this.state.cartOpen
    });
  }
  render() {
    const { onSubmit } = this.props;
    const { page, cartOpen } = this.state;
    return (
      <Row>
        <div className='small-12 medium-7 cell'>
          <CustomerInfoForm onSubmit={onSubmit} history={this.props.history} />
        </div>
        {/* <div className='small-12 medium-7 cell'>
          {
            page === 1 &&
            <CustomerInfoForm onSubmit={this.nextPage} />
          }
          {
            page === 2 &&
            <DeliveryOptionsForm previousPage={this.previousPage} onSubmit={onSubmit} history={this.props.history} />
          }
        </div> */}
        <div className='small-12 medium-5 cell'>
          <div className='cart cart--sidebar card'>
            <div className='cart__header cart__header--sidebar card__header' onClick={() => this.toggleCart()}>Overzicht bestelling <i className={'fa ' + (cartOpen ? 'fa-chevron-down' : 'fa-chevron-up')} /></div>
            <Small>
              <ShoppingCartContents context='sidebar' cartOpen={cartOpen} />
            </Small>
            <Medium>
              <ShoppingCartContents context='sidebar' cartOpen={true} />
            </Medium>
          </div>
        </div>
      </Row>
    );
  }
}

export default OrderForm;
