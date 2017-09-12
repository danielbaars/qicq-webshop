import _ from 'lodash';
import React, { Component } from 'react';
import cformat from '../utils/euroFormat';

import AddToCart from '../containers/AddToCart';

const mainProducts = {
  st1t: {
    id: 'st1t',
    name: 'Stromer ST1 t',
    summary: 'De stijlvolle Audi bruin gespoten ST1 speed pedelec biedt een bijzondere rij-ervaring dankzij de vernieuwende Speed Drive, ontwikkeld door Schlumpf.',
    visual: 'https://static.webshopapp.com/shops/029847/files/042614420/stromer-stromer-st1-t.jpg',
    price: 3490,
    options: productOptions
  },
  st2s: {
    id: 'st2s',
    name: 'Stromer ST2 S',
    summary: 'De Stromer ST2, maar dan uitgebreid met een super sterke 983Wh accu. De eerste speed pedelec met elektrische schakelen, en een super krachtige lichtset en remlicht.',
    visual: 'https://static.webshopapp.com/shops/029847/files/044440544/stromer-stromer-st2-s.jpg',
    price: 8990,
    options: productOptions
  }
};

const frameSizes = {
  f17: {
    inches: 17,
    riderHeight: '1,67m - 1,82m'
  },
  f20: {
    inches: 20,
    riderHeight: '1,77m - 1,92m'
  }
};

const productOptions = {
  seatPost: {
    id: 'seatPost',
    text: 'Geveerde zadelpen',
    price: 199
  },
  frontSuspension: {
    id: 'frontSuspension',
    text: 'Geveerde voorvork',
    price: 560
  },
  lock: {
    id: 'lock',
    text: 'Abus ringslot',
    price: 35
  },
  licensePlate: {
    id: 'licensePlate',
    text: 'RDW leges en kenteken',
    price: 157.3
  },
  winterTyres: {
    id: 'winterTyres',
    text: 'Winterbanden',
    price: 159.9
  }
};

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
    return _.map(frameSizes, item => {
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
    return _.map(productOptions, item => {
      return (
        <div className="product__options-item" key={item.id}>
          <input name={item.id} className="product__checkbox" id={item.id} type="checkbox" checked={this.state[item.id]} onChange={(event) => this.handleInputChange(event)}/>
          <label htmlFor={item.id}>{item.text} (+ {item.price.cformat()})</label>
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
    if ( _.some(productOptions, item => this.state[item.id]) ) {
      return _.filter(productOptions, item => {
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
    return _.filter(productOptions, item => {
      return this.state[item.id];
    });
  }
  render() {
    let id = this.props.productId;
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
          <AddToCart product={mainProducts[id].name} frameSize={this.state.frameSize} options={this.selectedOptions()} price={mainProducts[id].price} />
        </div>
      </div>
    );
  }
}

export default Product;
