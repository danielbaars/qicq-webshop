import _ from 'lodash';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { addOrder } from '../actions/cartActions';
import {bindActionCreators} from 'redux';

class AddToCart extends Component {
  render() {
    return (
      <div className="product__order"><a onClick={() => this.props.addOrder({name: this.props.product, size: this.props.frameSize, price: this.props.totalPrice})} className="button success large">Bestel nu</a></div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addOrder }, dispatch);
};

export default connect(null, mapDispatchToProps)(AddToCart);
