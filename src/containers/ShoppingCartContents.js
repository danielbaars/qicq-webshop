import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { removeProduct, removeOption, emptyCart } from '../actions/cartActions';
import { bindActionCreators } from 'redux';

import cformat from '../utils/euroFormat';

const CartItem = props => {
  return (
    <div className='cart__item'>
      <div className='grid-x grid-margin-x'>
        {props.children}
      </div>
    </div>
  );
};


const CartItemColumns = props => {
  const product = props.type === 'product';
  const total = props.type === 'total';
  const sidebar = props.context === 'sidebar';
  const thankYou = props.context === 'thank-you-page';
  const args = [props.index, props.i];
  return (
    <div className='grid-x grid-margin-x'>
      <div className={`cart__name cart__name--${props.type} cart__name--${props.context}`}>
        {{
          product: <NavLink to={'/products/' + props.id}>{props.name} <br/><span className='color-size'>({props.color}, {props.size}")</span></NavLink>,
          option: <span>+ {props.name}</span>,
          total: <span>{props.name}</span>
        }[props.type]}
        {
          !sidebar &&
            product &&
              <div className="cart__product-choices">
                <div className='color'><span>Kleur:</span> {props.color}</div>
                <div className='size'><span>Maat:</span> {props.size}"</div>
              </div>
        }
      </div>
      <div className={`cart__price cart__price--${props.type} cart__price--${props.context}`}>
        {props.price.cformat()}
      </div>
      {
        !sidebar &&
          !thankYou &&
            !total &&
              <a onClick={() => props.remove(...args)} className={`cart__remove cart__remove--${props.type} cart__remove--${props.context}`}><i className='cart__remove__icon fa fa-minus-square'/><span className='cart__remove__text'>verwijder</span></a>
      }
    </div>
  );
};

class ShoppingCartContents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      device: 'small'
    }
  }
  renderData() {
    const context = this.props.context;
    const sidebar = context === 'sidebar';
    return (
      <div className={`cart__contents cart__contents--${context}${sidebar ? ' card-section' : ''}`}>
        {this.props.contents.map((product, index) => {
          return (
            <CartItem key={_.uniqueId()}>
              {
                !sidebar &&
                  <div className={`cart__product-visual cart__product-visual--${context} imgc`}><NavLink to={'/products/' + product.id}><img src={product.image} /></NavLink></div>
              }
              <div className={(!sidebar ? 'small-12 medium-9' : 'small-12') + ' cell'}>
                <CartItemColumns type='product' id={product.id} name={product.name} color={product.color} size={product.size} price={product.price} index={index} remove={this.props.removeProduct} context={context} />
                {product.options.length > 0 &&
                  <div className='cart__options'>
                    {product.options.map((option, i) => {
                      return <CartItemColumns type='option' name={option.name} price={option.price} index={index} i={i} remove={this.props.removeOption} context={context} key={_.uniqueId()} />;
                    })}
                  </div>
                }
              </div>
            </CartItem>
          );
        })}
        <CartItem>
          <div className={(!sidebar ? 'small-12 medium-9 medium-offset-3' : 'small-12') + ' cell'}>
            <CartItemColumns type='total' name='Totaal' price={this.calculatePrice()} context={context} />
          </div>
        </CartItem>
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
    const length = this.props.contents.length;
    const cartNotEmpty = length > 0;
    return (
      <div className={this.props.cartOpen ? 'cart-open' : 'cart-closed'}>
        {cartNotEmpty ? this.renderData() : <div className={`cart__empty cart__empty--${this.props.context} card-section`}>Uw winkelmand is nog leeg...</div>}
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
