import React, { Component } from 'react';

class AddToCart extends Component {
  constructor(props) {
    super(props);
  }
  handleClick(size) {
    this.props.addProduct({name: 'Stromer ST1 t', price: size});
  }
  render() {
    return (
      <div className="product__order"><a onClick={() => this.handleClick(this.props.frameSize)} className="button success large">Bestel nu</a></div>
    );
  }
}



export default AddToCart;
