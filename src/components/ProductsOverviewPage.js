import _ from 'lodash';

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import cformat from '../utils/euroFormat';

class ProductsOverviewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: ""
    };
  }
  filterProducts(filter) {
    this.setState({
      filter
    });
  }
  renderProducts() {
    const products = this.props.data.qicqBikes;
    const sortedProducts = _.sortBy(products, ['price', 'type']);
    const filteredProducts = sortedProducts.filter(product => product.model === this.state.filter);
    let productsToDisplay = [];
    if (this.state.filter === '') {
      productsToDisplay = sortedProducts;
    } else {
      productsToDisplay = filteredProducts;
    }
    return productsToDisplay.map(product => {
      return (
        <div className="small-12 medium-4 large-4 cell" key={_.uniqueId()}>
          <NavLink to={"/products/" + product.id} className="card overview__product">
            <div className="card-divider overview__product-name">{product.brand + ' ' + product.model + ' ' + product.type}</div>
            <div className="overview__product-visual"><img src={product.colors[Object.keys(product.colors)[0]].visual} /></div>
            <div className="card-section overview__product-info">
              <p className="overview__product-summary">{product.summary}</p>
              <div className="overview__product-price">{product.price.cformat()}</div>
            </div>
          </NavLink>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="small-12 cell">
            <div className="overview__filters">
              <a onClick={() => this.filterProducts('')} className={"button success hollow small" + (this.state.filter === '' ? " selected" : "")}>Alle Stromers</a>
              <a onClick={() => this.filterProducts('ST1')} className={"button success hollow small" + (this.state.filter === 'ST1' ? " selected" : "")}>ST1</a>
              <a onClick={() => this.filterProducts('ST2')} className={"button success hollow small" + (this.state.filter === 'ST2' ? " selected" : "")}>ST2</a>
            </div>
          </div>
          {this.renderProducts()}
        </div>
      </div>
    );
  }
}

export default ProductsOverviewPage;
