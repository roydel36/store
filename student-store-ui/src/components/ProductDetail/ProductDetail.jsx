import React, { useEffect, useState } from 'react';
import './ProductDetail.css';
import { useParams } from 'react-router-dom';
import ProductView from '../ProductView/ProductView';
import axios from 'axios';

const ProductDetail = ({ handleAddItemToCart, handleRemoveItemToCart }) => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    axios
      .get(`http://localhost:3007/store/${productId}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false); 
      })
      .catch((error) => {
        console.log(error);
        setProduct(null);
        setLoading(false); 
      });
  }, [productId]);

  if (loading) {
  return <h1 className="loading">Loading...</h1>;
}

if (!product) {
  return <p>Product not found.</p>;
}


  return (
    <div className="product-detail">
      <ProductView
        product={product}
        productId={productId}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemToCart={handleRemoveItemToCart}
      />
    </div>
  );
};

export default ProductDetail;

