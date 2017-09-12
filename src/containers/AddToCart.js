import _ from 'lodash';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addOrder } from '../actions/cartActions';
import {bindActionCreators} from 'redux';

class AddToCart extends Component {
  render() {
    return (
      <div className="product__order">
        <NavLink to="/cart" onClick={() => this.props.addOrder({name: this.props.product, size: this.props.frameSize, options:this.props.options, price: this.props.price})} className="button success large">Bestel nu</NavLink>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addOrder }, dispatch);
};

export default connect(null, mapDispatchToProps)(AddToCart);
