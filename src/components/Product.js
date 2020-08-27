import React, { Component } from 'react'

class Product extends Component {
  constructor() {
    super()
    this.state = {
      quantity: 0,
    }
  }

  handleQuantityChange(action) {
    if (action === 'up') {
      this.setState({
        quantity: this.state.quantity + 1,
      })
    } else {
      if (this.state.quantity > 0) {
        this.setState({
          quantity: this.state.quantity - 1,
        })
      }
    }
  }

  handleAddToCart() {
    this.props.addtoCart(this.props.data.id, this.state.quantity)
    this.setState({
      quantity: 0,
    })
  }

  render() {
    return (
      <div className="product">
        <img src={this.props.data.image} />
        <p>{this.props.data.name}</p>
        <p>${this.props.data.price}</p>
        <div className="button-hold">
          <button onClick={() => this.handleQuantityChange('down')}>Quantity -</button>
          <p>{this.state.quantity}</p>
          <button onClick={() => this.handleQuantityChange('up')}>Quantity +</button>
        </div>
        {this.state.quantity ? (
          <button onClick={() => this.handleAddToCart()}>Add to cart</button>) : null}
      </div >
    )
  }
}
export default Product
