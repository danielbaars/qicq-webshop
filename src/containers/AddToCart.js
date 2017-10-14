import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addOrder } from '../actions/cartActions';
import { bindActionCreators } from 'redux';

class AddToCart extends Component {
  render() {
    return (
      <div className="product__order">
        <NavLink to="/cart" onClick={() => this.props.addOrder({id: this.props.id, name: this.props.product, image: this.props.image, color: this.props.color, size: this.props.frameSize, price: this.props.price, options: this.props.options})} className="button success large">Bestel nu</NavLink>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addOrder }, dispatch);
};

export default connect(null, mapDispatchToProps)(AddToCart);
