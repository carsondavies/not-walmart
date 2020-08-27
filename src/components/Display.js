import React, { Component } from 'react'
import Products from './Products'
import Cart from './Cart'
import axios from 'axios'

class Display extends Component {
  constructor() {
    super()
    this.state = {
      products: [],
      cart: { total: 0, items: [] },
    }
    this.addToCart = this.addToCart.bind(this)
    this.changeQuantity = this.changeQuantity.bind(this)
    this.removeFromCart = this.removeFromCart.bind(this)
    this.checkout = this.checkout.bind(this)
  }

  componentDidMount() {
    axios.get('/api/products').then(res => {
      axios.get('/api/cart').then(cartRes => {
        this.setState({
          products: res.data,
          cart: cartRes.data
        })
      })
    })
  }

  addToCart(id, quantity) {
    axios.post('/api/cart', { productId: id, quantity }).then(res => {
      this.setState({
        cart: res.data,
      })
    })
  }

  changeQuantity(cartId, action) {
    axios.put(`/api/cart/${cartId}?action=${action}`).then(res => {
      this.setState({
        cart: res.data,
      })
    })
  }

  removeFromCart(cartId) {
    axios.delete(`/api/cart/${cartId}`).then(res => {
      this.setState({
        cart: res.data,
      })
    })
  }

  checkout() {
    axios.delete('/api/cart').then(res => {
      this.setState({
        cart: res.data,
      })
    })
  }

  render() {
    return (
      <div className="display">
        <Products addtoCart={this.addToCart} products={this.state.products} />
        <Cart
          removeFromCart={this.removeFromCart}
          changeQuantity={this.changeQuantity}
          checkout={this.checkout}
          cart={this.state.cart} />
      </div>
    )
  }
}
export default Display
