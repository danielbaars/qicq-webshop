import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { removeProduct, removeOption, emptyCart } from '../actions/cartActions';
import { bindActionCreators } from 'redux';

import cformat from '../utils/euroFormat';

class ShoppingCartContents extends Component {
  renderData() {
    return (
      <div className="cart__contents">
        {this.props.contents.map((item, index) => {
          return(
            <div key={_.uniqueId()}>
              <div className="cart__item cart__main-product" key={_.uniqueId()}>
                <span className="name">{item.name} ({item.color}, {item.size}")</span>
                <span className="price">{item.price.cformat()}</span>
                {this.props.edit ?
                  <span className="action"><a onClick={() => this.props.removeProduct(index)} className="cart__remove button alert hollow tiny">X</a></span>
                  : null
                }
              </div>
              <div className="cart__options">
                {item.options.map((item, i) => {
                  return (
                    <div className="cart__item cart__option" key={_.uniqueId()}>
                      <span className="name">+ {item.name}</span>
                      <span className="price">{item.price.cformat()}</span>
                      {this.props.edit ?
                        <span className="action"><a onClick={() => this.props.removeOption(index, i)} className="cart__remove button alert hollow tiny">X</a></span>
                        : null
                      }
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        <div className="cart__item cart__total-price">
          <span className="name">Totaal:</span>
          <span className="price">{this.calculatePrice().cformat()}</span>
        </div>
      </div>
    );
  }
  calculatePrice() {
    let contents = this.props.contents;
    let productPrices = contents.map( item => item.price );
    let optionPrices = contents.map( product => {
      return product.options.map( item => item.price );
    });
    let pricesArray = [...productPrices, ...optionPrices];
    let flatArray = [].concat(...pricesArray);
    return flatArray.reduce( (total, num) => total + num);
  }
  render() {
    return (
      <div className={"cart card cart--" + this.props.className}>
        <div className="cart__header card-divider">Winkelmand</div>
        <div className="cart__contents card-section">
          {this.props.contents.length > 0 ? this.renderData() : <div className="cart__empty">Uw winkelmand is nog leeg...</div>}
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
  return bindActionCreators({ removeProduct, removeOption, emptyCart }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartContents);
