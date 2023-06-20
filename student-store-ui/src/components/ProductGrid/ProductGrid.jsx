import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import "./ProductGrid.css"

const ProductGrid = ({products, searchItem, activeCategory}) => {
  let filters = products.filter(product => product.category.includes(activeCategory))

  return (
    <div>
      <h2 id = "product-title">Best Selling Products</h2>
    <div className = "product-grid " id = "Buy">
      {filters.filter(product => product.name.toLowerCase().includes(searchItem.toLowerCase())).map((product) => (
    <ProductCard key = {product.name} product = {product}/>
  ))}
      </div>
    </div>
  )
}

export default ProductGrid
