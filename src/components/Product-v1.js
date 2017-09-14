import _ from 'lodash';
import React, { Component } from 'react';
import cformat from '../utils/euroFormat';

import mainProducts from '../data/bikes';
import AddToCart from '../containers/AddToCart';

const initialState = {
  price: 0,
  frameSize: 20,
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
    this.setState({
      price: mainProducts[this.props.productId].price
    });
  }
  componentWillReceiveProps(nextProps) {
    const newValues = {price: mainProducts[nextProps.productId].price};
    this.setState({...initialState, ...newValues});
  }
  renderFrameSizeButtons() {
    const id = this.props.productId;
    return _.map(mainProducts[id].sizes, item => {
      return (
        <a onClick={() => this.selectFrameSize(item.inches)} className={"button" + (this.state.frameSize == item.inches ? " selected" : " not-selected")} key={item.inches}> <span className="main">{item.inches}"</span><span className="sub">({item.riderHeight})</span></a>
      );
    });
  }
  selectFrameSize(inches) {
    this.setState({
      frameSize: inches
    });
  }
  renderOtherOptions() {
    const id = this.props.productId;
    return _.map(mainProducts[id].options, item => {
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
    const id = this.props.productId;
    if ( _.some(mainProducts[id].options, item => this.state[item.id]) ) {
      return _.filter(mainProducts[id].options, item => {
        return this.state[item.id];
      }).map((item) => item.price).reduce((total, num) => total + num ) + mainProducts[this.props.productId].price;
    } else {
      return mainProducts[this.props.productId].price;
    }
  }
  setPrice() {
    this.setState({
      price: this.calculatePrice()
    });
  }
  selectedOptions() {
    const id = this.props.productId;
    return _.filter(mainProducts[id].options, item => {
      return this.state[item.id];
    });
  }
  render() {
    const id = this.props.productId;
    return (
      <div>
        <div className="product">
          <div className="product__info">
            <h1 className="product__title">{mainProducts[id].name}</h1>
            <div className="product__summary">{mainProducts[id].summary}</div>
            {/* <div className="product__visual"><img src={mainProducts[id].visual} /></div> */}
            <div className="product__price">{this.state.price.cformat()}</div>
          </div>
          <div className="product__options">
            <div className="product__frame-size">
              <h3 className="options__label">Framemaat:</h3>
              <div className="button-group">
                {this.renderFrameSizeButtons()}
              </div>
            </div>
            <h3 className="options__label">Andere opties:</h3>
            {this.renderOtherOptions()}
          </div>
          <AddToCart product={mainProducts[id].name} frameSize={this.state.frameSize} price={mainProducts[id].price} options={this.selectedOptions()} />
        </div>
      </div>
    );
  }
}

export default Product;
