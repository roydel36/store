import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductGrid.css';

const ProductGrid = ({ products, searchItem, activeCategory, handleAddItemToCart, handleRemoveItemToCart }) => {
  let filters = products.filter(product => product.category.includes(activeCategory));

  return (
    <div className="product-grid"> 
      {filters
  .filter((product) => product.name.toLowerCase().includes(searchItem.toLowerCase()))
  .map((product) => (
    <ProductCard
  key={product.id}
  product={product}
  showDescription={false}
  handleAddItemToCart={handleAddItemToCart}
  handleRemoveItemToCart={handleRemoveItemToCart}
/>

  ))}

    </div>
  );
};

export default ProductGrid;
