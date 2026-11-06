import React, { useContext } from 'react'
import toast from 'react-hot-toast'
import './Product.css'
import { shoppingCartContxt } from './Context/ShppingCartContext'

const Product = ({product}) => {
    const {setCartContext}=useContext(shoppingCartContxt)
    const handelClick = () => {
      toast(" تم اضافة المنتج بنجاح");
      setCartContext(prev => [...prev,product]);
    }
  return (
    <div className='product-card'>
      <img
        src={product.image}
        alt={product.title}
        className='product-image'
      />

      <p className='product-title'>{product.title}</p>
      <h3 className='product-rate'>⭐ {product.rate}</h3>
      <h3 className='product-price'>${product.price}</h3>

      <button className='product-button' onClick={handelClick}>
        Add To Cart
      </button>
    </div>
  )
}

export default Product
