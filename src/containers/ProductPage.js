import _ from 'lodash';
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Product from '../components/Product';
import { addOrder } from '../actions/index';
import {bindActionCreators} from 'redux';


class ProductPage extends Component {
  renderData() {
    return this.props.contents.map((item) => {
      return (
        <li key={_.uniqueId()}>{item.name} / {item.price}</li>
      );

    });
  }
  render() {
    return (
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="small-12 medium-8 cell">
            <Product />
          </div>
          <div className="small-12 medium-4 cell">
            <div className="card">
              <div className="card-divider">Shopping Cart</div>
              <div className="card-section">
                <ul>
                  {this.renderData()}
                </ul>
                <a onClick={() => this.props.addOrder({name: 'Stromer ST1 t', price: 3490})} className="button">Add Order</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    contents: state.cartContents
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addOrder }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
