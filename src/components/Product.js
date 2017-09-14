import _ from 'lodash';
import axios from 'axios';
import React, { Component } from 'react';
import cformat from '../utils/euroFormat';

import mainProducts from '../data/bikes';
import AddToCart from '../containers/AddToCart';

const DATA_URL = '../data/qicqBikes.json';

const initialState = {
  data: {},
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
    const data = this.state.data;
    this.getData();
    this.setState({
      price: data[this.props.productId].price
    });
  }
  componentWillReceiveProps(nextProps) {
    const data = this.state.data;
    const newValues = {price: data[nextProps.productId].price};
    this.setState({...initialState, ...newValues});
  }
  getData() {
    var _this = this;
    axios.get(DATA_URL).then(response => {
      _this.setState({
        data: response.data
      });
    });
  }
  renderFrameSizeButtons() {
    const data = this.state.data;
    const id = this.props.productId;
    return _.map(data[id].sizes, item => {
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
    const data = this.state.data;
    const id = this.props.productId;
    return _.map(data[id].options, item => {
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
    const data = this.state.data;
    const id = this.props.productId;
    if ( _.some(data[id].options, item => this.state[item.id]) ) {
      return _.filter(data[id].options, item => {
        return this.state[item.id];
      }).map((item) => item.price).reduce((total, num) => total + num ) + data[this.props.productId].price;
    } else {
      return data[this.props.productId].price;
    }
  }
  setPrice() {
    this.setState({
      price: this.calculatePrice()
    });
  }
  selectedOptions() {
    const data = this.state.data;
    const id = this.props.productId;
    return _.filter(data[id].options, item => {
      return this.state[item.id];
    });
  }
  render() {
    const data = this.state.data;
    const id = this.props.productId;
    return (
      <div>
        <div className="product">
          <div className="product__info">
            <h1 className="product__title">{data[id].name}</h1>
            <div className="product__summary">{data[id].summary}</div>
            {/* <div className="product__visual"><img src={data[id].visual} /></div> */}
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
          <AddToCart product={data[id].name} frameSize={this.state.frameSize} price={data[id].price} options={this.selectedOptions()} />
        </div>
      </div>
    );
  }
}

export default Product;
