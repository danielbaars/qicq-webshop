import _ from 'lodash';

import React from 'react';
import { NavLink } from 'react-router-dom';
import Product from './Product';

import mainProducts from '../data/bikes';

const ProductsOverviewPage = () => {
  return (
    <div className="grid-container">
      <div className="grid-x grid-margin-x">
        <div className="small-12 medium-7 cell">
          <div className="button-group">
            {_.map(mainProducts, item => {
              return (
                <NavLink to={"/products/" + item.id} className="card" key={_.uniqueId()}>
                  <div className="card-divider">{item.name}</div>
                  <img src={item.visual} />
                  <div className="card-section">{item.summary}</div>
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsOverviewPage;
