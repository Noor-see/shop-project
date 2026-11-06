import React, { useContext } from 'react'
import CartItem from './CartItem'
import './Cartss.css'
import { shoppingCartContxt } from './Context/ShppingCartContext'

const Carts = ({}) => {
  const {CartsItem} = useContext(shoppingCartContxt)
  return (
    <div className='carts-product'>
      <h1>cart{CartsItem.length}</h1>
      {CartsItem.map((item)=>(
        <CartItem key={item.id} CartsItem={item}/>
      ))}
    </div>
  )
}

export default Carts
