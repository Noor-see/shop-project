import React from 'react'
import Product from './Product'
import './Products.css'

const Products = ({products}) => {
  return (
    <div className='Produts-card'>
      {products.map((product)=>(
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Products
