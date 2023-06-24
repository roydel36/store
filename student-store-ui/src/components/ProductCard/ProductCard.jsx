import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({
  product,
  productId,
  quantity,
  handleAddItemToCart,
  handleRemoveItemFromCart,
  showDescription,
}) => {
  const handleAddToCart = () => {
    handleAddItemToCart(product.id, product.name, product.price, quantity);
  };

  const handleRemoveFromCart = () => {
    handleRemoveItemFromCart(product.id);
  };

  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`}>
        <div className="media">
          <img className="product-image" src={product.image} alt={product.name} />
        </div>
      </Link>
      <h2 className="product-name">{product.name}</h2>
      <h2 className="product-price">${product.price.toFixed(2)}</h2>
      {showDescription && (
        <p className="product-description">{product.description}</p>
      )}
      {quantity > 0 && <div className="product-quantity">Quantity: {quantity}</div>}
      <div className='lol'>
        <button className="add" onClick={handleAddToCart}>
          Add
        </button>
        <button className="remove" onClick={handleRemoveFromCart}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
