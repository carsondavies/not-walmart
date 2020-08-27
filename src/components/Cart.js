import React from 'react'
import CartItem from './CartItem'

const Cart = (props) => {
  return (
    <div className="cart-container">
      <div className="cart">
        <h2>Your Cart</h2>
        {props.cart.items.map(element => {
          return <CartItem
            changeQuantity={props.changeQuantity}
            removeFromCart={props.removeFromCart}
            key={element.cartId}
            data={element} />
        })}
      </div>
      <div className="total">
        Your total: ${props.cart.total}
        <button onClick={props.checkout}>Checkout</button>
      </div>
    </div>
  )
}
export default Cart
