import React from 'react'
import './CartItem.css'
const CartItem = ({CartsItem}) => {
  return (
    <div className='show-product'>
      <img
        src={CartsItem.image}
        alt={CartsItem.title}
        className='product-imagee'
      />

      <p className='product-titlee'>{CartsItem.title}</p>
      <h3 className='product-ratee'>⭐ {CartsItem.rate}</h3>
      <h3 className='product-pricee'>${CartsItem.price}</h3>
    </div>
  )
}

export default CartItem
