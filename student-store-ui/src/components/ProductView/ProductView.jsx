import React from "react";
import ProductCard from '../ProductCard/ProductCard';

const ProductView = ({product, productId }) => {

  return (
    <div className = "product-view">
      <h1 className = "product-id">Product #: {productId}</h1>
      <ProductCard product = {product} productId={productId} showDescription = "true"/>
      </div>
  )
}
export default ProductView
