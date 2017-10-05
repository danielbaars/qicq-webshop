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
  const option = props.type === 'option';
  const total = props.type === 'total';
  const args = [props.index, props.i];
  return (
    <div className='grid-x grid-margin-x'>
      <div className='small-12 medium-8 cell'>
        <div className={`cart__${props.type}-name`}>
          {{
            product: <NavLink to={'/products/' + props.id}>{props.name}</NavLink>,
            option: <span>+ {props.name}</span>,
            total: <span>{props.name}</span>
          }[props.type]}
        </div>
        {product &&
          <div className="product__choices">
            <div className='color'><span>Kleur:</span> {props.color}</div>
            <div className='size'><span>Maat:</span> {props.size}"</div>
          </div>
        }
      </div>
      <div className='small-12 medium-2 cell'>
        <div className={`cart__${props.type}-price`}>{props.price.cformat()}</div>
      </div>
      {!total &&
        <div className='small-12 medium-2 cell'>
          <a onClick={() => props.remove(...args)} className='cart__remove'>verwijder</a>
        </div>
      }
    </div>
  );
};

class ShoppingCartContents extends Component {
  renderData() {
    const context = this.props.context;
    const sidebar = context === 'sidebar';
    return (
      <div className={`cart__contents cart__contents--${context}`}>
        {this.props.contents.map((product, index) => {
          return (
            <CartItem key={_.uniqueId()}>
              {!sidebar &&
                <div className='small-6 medium-3 cell'>
                  <div className="cart__product-visual imgc"><NavLink to={'/products/' + product.id}><img src={product.image} /></NavLink></div>
                </div>
              }
              <div className='small-6 medium-9 cell'>
                <CartItemColumns type='product' id={product.id} name={product.name} color={product.color} size={product.size} price={product.price} index={index} remove={this.props.removeProduct} />
                {product.options.length > 0 &&
                  <div className='cart__options'>
                    {product.options.map((option, i) => {
                      return <CartItemColumns type='option' name={option.name} price={option.price} index={index} i={i} remove={this.props.removeOption} key={_.uniqueId()} />;
                    })}
                  </div>
                }
              </div>
            </CartItem>
          );
        })}
        <CartItem>
          <div className='small-6 medium-9 medium-offset-3 cell'>
            <CartItemColumns type='total' name='Totaal' price={this.calculatePrice()} />
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
    return (
      <div>
        {this.props.contents.length > 0 ? this.renderData() : <div className='cart__empty'>Uw winkelmand is nog leeg...</div>}
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
