import _ from 'lodash';
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { addOrder } from '../actions/index';
import {bindActionCreators} from 'redux';
import cformat from '../utils/euroFormat';

const product = {
  name: 'Stromer ST1 t',
  summary: 'De stijlvolle Audi bruin gespoten ST1 speed pedelec biedt een bijzondere rij-ervaring dankzij de vernieuwende Speed Drive, ontwikkeld door Schlumpf.',
  visual: 'https://static.webshopapp.com/shops/029847/files/042614420/stromer-stromer-st1-t.jpg',
  price: 3490
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

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: product.price,
      frameSize: 20,
      seatPost: false,
      frontSuspension: false,
      lock: false,
      licensePlate: false,
      winterTyres: false
    };
  }
  testFunction() {
    return _.map(frameSizes, item => {
      return (
        <a onClick={() => this.selectFrameSize(item.inches)} className={"button"} key={item.inches}> <span className="main">{item.inches}"</span><span className="sub">({item.riderHeight})</span></a>
      );
    });
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
      }).map((item) => item.price).reduce((total, num) => total + num ) + product.price;
    } else {
      return product.price;
    }
  }
  setPrice() {
    this.setState({
      price: this.calculatePrice()
    });
  }
  renderCartData() {
    return this.props.contents.map((item) => {
      return (
        <li key={_.uniqueId()}>{item.name} / {item.price}</li>
      );

    });
  }
  render() {
    // console.log(this.state.price);
    return (
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="small-12 medium-8 cell">
            <div className="product">
              <div className="product">
                <div className="product__info">
                  <h1 className="product__title">{product.name}</h1>
                  <div className="product__summary">{product.summary}</div>
                  <div className="product__visual"><img src={product.visual} /></div>
                  <div className="test">{this.testFunction()}</div>
                  {/* <div className="product__price">{this.state.price.cformat()}</div> */}
                </div>
                <div className="product__options">
                  <div className="product__frame-size">
                    <h3 className="options__label">Framemaat:</h3>
                    <div className="button-group">
                      {/* {this.renderFrameSizeButtons()} */}
                    </div>
                  </div>
                  <h3 className="options__label">Andere opties:</h3>
                  {/* {this.renderOtherOptions()} */}
                </div>
                <div className="product__order"><a className="button success large">Bestel nu</a></div>
              </div>
            </div>
          </div>
          <div className="small-12 medium-4 cell">
            <div className="card">
              <div className="card-divider">Shopping Cart</div>
              <div className="card-section">
                <ul>
                  {this.renderCartData()}
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
