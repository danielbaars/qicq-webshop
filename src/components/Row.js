import React from 'react';

const Row = props => {
  return (
    <div className="grid-container">
      <div className={"grid-x grid-margin-x" + (props.extraClasses ? ' ' + props.extraClasses : '')}>
        {props.children}
      </div>
    </div>
  );
};

export default Row;
