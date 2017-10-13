import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { push as Menu } from 'react-burger-menu';

import LinksList from './LinksList';
import mastheadLinks from '../data/mastheadLinks';

class MenuWrap extends Component {
  constructor (props) {
    super(props);
    this.state = {
      hidden: false
    };
  }
  show() {
    this.setState({hidden : false});
  }
  render() {
    let style;
    if (this.state.hidden) {
      style = {display: 'none'};
    }
    return (
      <div style={style}>
        {this.props.children}
      </div>
    );
  }
}

const OffCanvasMenu = props => {
  return (
    <div class={props.mqClass} id='outer-container' style={{height: '100%'}}>
      <MenuWrap wait={20}>
        <Menu id='push' pageWrapId={'page-wrap'} outerContainerId={'outer-container'} isOpen={ false } width={ 200 }>
          <LinksList list={mastheadLinks[0]} listClasses='mobile-nav xlist' linkClass='ocm' />
          <NavLink to='/cart' className='nav__link nav__link--ocm nav__link--cart'><i className='fa fa-shopping-basket' /><span className="link__label">Winkelmand</span></NavLink>
        </Menu>
      </MenuWrap>
      <div id='page-wrap'>
        {props.children}
      </div>
    </div>

  );
};

export default OffCanvasMenu;
