import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import Row from './Row';
import mastheadLinks from '../data/mastheadLinks';

const MastheadLinks = props => {
  return (
    <ul className='shop__nav xlist hlist'>
      {_.map(props.list, link => {
        return (
          <li key={_.uniqueId('fl')}>
            <a href={link.url} className={'nav__link nav__link--' + link.id}>
              <span className="link__label">{link.label}</span><br/>
              <span className="link__sublabel">{link.sublabel}</span>
            </a>
          </li>);
      })}
    </ul>
  );
};

const Masthead = props => {
  return (
    <div className='masthead'>
      <Row extraClasses='align-middle'>
        <div className='small-12 medium-3 cell'>
          <div className='masthead__logo imgc'>
            <NavLink exact to='/'>
              <img src='../img/qicq-logo.svg' />
            </NavLink>
          </div>
        </div>
        <div className='small-12 medium-7 cell'>
          <MastheadLinks list={mastheadLinks[0]} />
        </div>
        <div className='small-12 medium-2 cell'>
          <NavLink to='/cart' className='nav__link nav__link--cart'><span className="link__label">Winkelmand</span><span className="cart__quantity">({props.cart.length})</span></NavLink>
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
