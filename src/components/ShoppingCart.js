import React from 'react';
import { NavLink } from 'react-router-dom';

import Content from './Content';
import Row from './Row';
import ShoppingCartContents from '../containers/ShoppingCartContents';

const ShoppingCart = () => {
  return (
    <Content contentClass='cart-page'>
      <Row>
        <div className='small-12 cell'>
          <h1 className='page-title cart__title'>Winkelmand</h1>
          <div className='cart card'>
            <div className='card-section'>
              <ShoppingCartContents context='cart-page' />
            </div>
          </div>
          <div className='cart__nav buttons-grouped'>
            <NavLink to='/' className='cart__button-prev button success hollow large'><i className='fa fa-chevron-left' /> Verder met winkelen</NavLink>
            <NavLink to='/form' className='cart__button-next button success large'>Verder met bestellen <i className='fa fa-chevron-right' /></NavLink>
          </div>
        </div>
      </Row>
    </Content>
  );
};

export default ShoppingCart;
