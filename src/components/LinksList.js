import React from 'react';

const LinksList = props => {
  return (
    <ul className={props.listClasses}>
      {_.map(props.list, link => {
        return (
          <li key={_.uniqueId('fl')}>
            <a href={link.url} className={`nav__link nav__link--${props.linkClass} nav__link--${link.id}`}>
              <span className="link__label">{link.label}</span><br/>
              <span className="link__sublabel">{link.sublabel}</span>
            </a>
          </li>);
      })}
    </ul>
  );
};

export default LinksList;
