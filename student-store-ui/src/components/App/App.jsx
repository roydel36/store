import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import ProductDetail from '../ProductDetail/ProductDetail';
// import NotFound from "../NotFound/NotFound";
import axios from 'axios';
import './App.css';
import Sidebar from '../Sidebar/Sidebar';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

export default function App() {
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [checkoutForm, setCheckoutForm] = useState({
    name: '',
    email: '',
    error: null,
    success: false,
    receipt: null,
  });
  

  useEffect(() => {
    axios
      .get('http://localhost:3007/store')
      .then((response) => {
        setProducts(response.data);
        setIsFetching(false);
      })
      .catch((error) => {
        setError('Error fetching products from the API.');
        setIsFetching(false);
      });
  }, []);

  const handleSidebarToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleAddItemToCart = (productId, productName, productPrice, quantity) => {
    const updatedCart = [...shoppingCart];
    const existingCartItemIndex = updatedCart.findIndex((cartItem) => cartItem.itemId === productId);

    if (existingCartItemIndex !== -1) {
      updatedCart[existingCartItemIndex].quantity++;
    } else {
      updatedCart.push({ itemId: productId, name: productName, price: productPrice, quantity: 1 });
    }

    setShoppingCart(updatedCart);
  };

  const handleRemoveItemFromCart = (productId) => {
    setShoppingCart((prevCart) => {
      const updatedCart = prevCart
        .map((item) => {
          if (item.itemId === productId) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
  
      return updatedCart;
    });
  };
  

  const handleOnCheckoutFormChange = (name, value) => {
    setCheckoutForm((prevForm) => ({
      ...prevForm,
      [name]: value,
      error: null,
    }));
  };

  const handleOnSubmitCheckoutForm = () => {
  if (shoppingCart.length === 0 || !checkoutForm.name || !checkoutForm.email) {
    setCheckoutForm((prevForm) => ({
      ...prevForm,
      error:
        'Name and email are both required fields, and the cart must have at least one item to complete the purchase.',
    }));
    return;
  }

  const order = {
    user: {
      name: checkoutForm.name,
      email: checkoutForm.email,
    },
    shoppingCart: shoppingCart.map((item) => ({
      itemId: item.itemId,
      quantity: item.quantity,
    })),
  };

  axios
    .post('http://localhost:3007/store', order)
    .then((response) => {
      const newPurchase = response.data.purchase;
      console.log('Order submitted successfully!');

      setShoppingCart([]);
      setCheckoutForm((prevForm) => ({
        name: '',
        email: '',
        error: null,
        success: true,
        receipt: newPurchase.receipt,
      }));
    })
    .catch((error) => {
      console.error('Issue submitting the order. Please try again:', error);
      setCheckoutForm((prevForm) => ({
        ...prevForm,
        error: 'Issue submitting the order. Please try again.',
      }));
    });
};


  
  

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Sidebar
            isOpen={isOpen}
            shoppingCart={shoppingCart}
            products={products}
            checkoutForm={checkoutForm}
            handleOnCheckoutFormChange={handleOnCheckoutFormChange}
            handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
            handleOnToggle={handleSidebarToggle}
          />
          <Routes>
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route
  path="/"
  element={
    <Home
      products={products}
      handleAddItemToCart={handleAddItemToCart}
      handleRemoveItemFromCart={handleRemoveItemFromCart} // Add this line
    />
  }
/>

            {/*<Route path="*" element={<NotFound />} /> */}
          </Routes>
          <ShoppingCart isOpen={isOpen} products={products} shoppingCart={shoppingCart} />
        </main>
      </BrowserRouter>
    </div>
  );
}
