import _ from 'lodash';
import React, { Component } from 'react';
import cformat from '../utils/euroFormat';

import AddToCart from '../containers/AddToCart';

const initialState = {
  price: 0,
  color: "",
  frameSize: 0,
  seatPost: false,
  frontSuspension: false,
  lock: false,
  licensePlate: false,
  winterTyres: false
}

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }
  componentDidMount() {
    const product = this.props.product;
    const firstSize = product.colors[Object.keys(product.colors)[0]].sizes[0];
    this.setState({
      frameSize: firstSize,
      color: Object.keys(product.colors)[0],
      price: product.price
    });
  }
  componentWillReceiveProps(nextProps) {
    const product = nextProps.product;
    const firstSize = product.colors[Object.keys(product.colors)[0]].sizes[0];
    const newValues = {
      frameSize: firstSize,
      color: Object.keys(product.colors)[0],
      price: product.price
    };
    this.setState(
      {...initialState, ...newValues}
    );
  }
  renderColors() {
    const product = this.props.product;
    const colors = Object.keys(product.colors);
    return colors.map(color => {
      return (
        <a onClick={() => this.selectColor(color)} className={"button button--color button--" + color  + (this.state.color == color ? " chosen-color" : " not-chosen-color")} key={_.uniqueId()}>{product.colors[color].colorName}</a>
      );
    });
  }
  selectColor(color) {
    this.setState({
      color
    }, this.setState({
      frameSize: this.props.product.colors[color].sizes[0]
    }));
  }
  renderSizes() {
    const product = this.props.product;
    const color = this.state.color;
    const sizesInfo = this.props.sizes;
    if (product.colors[color] !== undefined) {
      return product.colors[color].sizes.map(size => {
        return (
          <a onClick={() => this.selectFrameSize(size)} className={"button" + (this.state.frameSize == size ? " selected" : " not-selected")} key={_.uniqueId()}><span className="main">{sizesInfo[size].size}"</span><span className="sub">({sizesInfo[size].riderHeight})</span></a>
        );
      });
    } else {
      return null;
    }
  }
  selectFrameSize(inches) {
    this.setState({
      frameSize: inches
    });
  }
  renderOtherOptions() {
    const options = this.props.options;
    return _.map(options, item => {
      return (
        <div className="product__options-item" key={item.id}>
          <input name={item.id} className="product__checkbox" id={item.id} type="checkbox" checked={this.state[item.id]} onChange={(event) => this.handleInputChange(event)}/>
          <label htmlFor={item.id}>{item.name} (+ {item.price.cformat()})</label>
        </div>
      );
    });
  }
  handleInputChange(event) {
    this.setState({
      [event.target.name]: !this.state[event.target.name]
    }, this.setPrice);
  }
  calculatePrice() {
    const options = this.props.options;
    if ( _.some(options, option => this.state[option.id]) ) {
      return _.filter(options, option => {
        return this.state[option.id];
      }).map((option) => option.price).reduce((total, num) => total + num ) + this.props.product.price;
    } else {
      return this.props.product.price;
    }
  }
  setPrice() {
    this.setState({
      price: this.calculatePrice()
    });
  }
  selectedOptions() {
    const options = this.props.options;
    return _.filter(options, option => {
      return this.state[option.id];
    });
  }
  render() {
    const product = this.props.product;
    return (
      <div>
        <div className="product">
          <div className="product__info">
            <h1 className="product__title">{product.brand} {product.model} {product.type}</h1>
            <div className="product__summary">{product.summary}</div>
            <div className="product__visual"><img src={product.visual} /></div>
            <div className="product__price">{this.state.price.cformat()}</div>
          </div>
          <div className="product__options">
            <div className="product__color">
              <h3 className="options__label">Kleuren:</h3>
              <div className="button-group">
                {this.renderColors()}
              </div>
            </div>
            <div className="product__frame-size">
              <h3 className="options__label">Framemaat:</h3>
              <div className="button-group">
                {this.renderSizes()}
              </div>
            </div>
            <h3 className="options__label">Andere opties:</h3>
            {this.renderOtherOptions()}
          </div>
          {product.colors[this.state.color] != undefined &&
            <AddToCart product={product.brand + ' ' + product.model + ' ' + product.type} color={product.colors[this.state.color].colorName} frameSize={this.state.frameSize} price={product.price} options={this.selectedOptions()} />
          }
        </div>
      </div>
    );
  }
}

export default Product;
