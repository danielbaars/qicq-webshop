import _ from 'lodash';
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Product from '../components/Product';
import { emptyCart } from '../actions/cartActions';
import {bindActionCreators} from 'redux';

import cformat from '../utils/euroFormat';

class ProductPage extends Component {
  renderData() {
    return this.props.contents.map((item) => {
      return (
        <li key={_.uniqueId()}>{item.name} ({item.size}") <strong>{item.price.cformat()}</strong></li>
      );

    });
  }
  render() {
    // console.log('Content:', this.props.content);
    return (
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="small-12 medium-7 cell">
            <Product />
          </div>
          <div className="small-12 medium-5 cell">
            <div className="cart card">
              <div className="cart__header card-divider">Shopping Cart</div>
              <div className="cart__contents card-section">
                {this.props.contents.length > 0 ?  <ul>{this.renderData()}</ul> : null}
                {this.props.contents.length > 0 ? <a onClick={() => this.props.emptyCart()} className="button alert small">Leeg boodschappenmand</a> : <div className="cart__empty">Your shopping cart is still empty...</div>}
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    contents: state.cartContents
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ emptyCart }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
