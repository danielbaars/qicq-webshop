import _ from 'lodash';
import React from 'react';

import Row from './Row';
import footerLinks from '../data/footerLinks';

const FooterColumn = props => {
  return (
    <div className={`small-12 medium-3 cell ${props.extraClasses}`}>
      {props.children}
    </div>
  );
};

const FooterLinks = props => {
  return (
    <ul className={'footer__list' + (props.listClass ? ' footer__list--' + props.listClass : '') + ' xlist'}>
      {_.map(props.list, link => {
        return <li key={_.uniqueId('fl')}><a href={link.url} className={'footer__link footer__link--' + link.id}><span className='link__label'>{link.label}</span></a></li>;
      })}
    </ul>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <Row>
        <FooterColumn extraClasses='small-order-2 medium-order-1'>
          <FooterLinks list={footerLinks[0]} />
        </FooterColumn>
        <FooterColumn extraClasses='small-order-3 medium-order-2'>
          <FooterLinks list={footerLinks[1]} />
        </FooterColumn>
        <FooterColumn extraClasses='small-order-4 medium-order-3'>
          <FooterLinks list={footerLinks[2]} />
        </FooterColumn>
        <FooterColumn extraClasses='small-order-1 medium-order-4'>
          <FooterLinks list={footerLinks[3]} listClass='contact' />
          <div className='footer__list--social'>
            <FooterLinks list={footerLinks[4]} />
          </div>
        </FooterColumn>
      </Row>
    </div>
  );
};

export default Footer;
