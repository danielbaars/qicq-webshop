import React from 'react';

const Content = props => {
  return (
    <div className={'content ' + props.contentClass}>
      {props.children}
    </div>
  );
};

export default Content;
