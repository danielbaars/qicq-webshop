import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import Row from './Row';
import LinksList from './LinksList';
import mastheadLinks from '../data/mastheadLinks';

const Masthead = props => {
  return (
    <div className='masthead'>
      <Row extraClasses='align-middle'>
        <div className='small-12 medium-3 cell'>
          <div className='masthead__logo'>
            <NavLink exact to='/' className='imgc'>
              <img src={require('../img/qicq-logo.svg')} />
            </NavLink>
          </div>
        </div>
        <div className='hide-for-small-only medium-9 cell'>
          <LinksList list={mastheadLinks[0]} listClasses='shop__nav xlist hlist' linkClass='masthead' />
          <NavLink to='/cart' className='nav__link nav__link--masthead nav__link--cart'><span className="link__label">Winkelmand</span><span className="cart__quantity">({props.cart.length})</span></NavLink>
        </div>
      </Row>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cartContents
  };
};

export default connect(mapStateToProps)(Masthead);
