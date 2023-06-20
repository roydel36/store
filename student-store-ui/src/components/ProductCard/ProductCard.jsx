import React from 'react'
import { Link } from 'react-router-dom'
import "./ProductCard.css" 

const ProductCard = ({product, showDescription}) => {
  return (
    <div className = "product-card">
      <Link to = {`/products/${product.id}`}>
      <img className = "product-image" src = {product.image}/>
      </Link>
      <h2 className='name'>{product.name}</h2>
      <h2 className='name'>${product.price}</h2>
      {showDescription ? 
      <p className = "product-description">{product.description}</p>: null}
      </div>
  )
}

export default ProductCard