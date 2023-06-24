
import './CheckoutForm.css';
import React, { useState, useEffect } from 'react';

const CheckoutForm = ({
  isOpen,
  shoppingCart,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
}) => {
  
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = () => {
    handleOnSubmitCheckoutForm();
  };
  
  useEffect(() => {
    setSuccessMessage('');
  }, [checkoutForm, shoppingCart]);
  

  return (
    <div className="checkout-form">
      <input
        type="email"
        name="email"
        placeholder="student@codepath.org"
        value={checkoutForm.email}
        onChange={(e) => handleOnCheckoutFormChange('email', e.target.value)}
        className="checkout-form-input"
      />

      <input
        type="text"
        name="name"
        placeholder="Student Name"
        value={checkoutForm.name}
        onChange={(e) => handleOnCheckoutFormChange('name', e.target.value)}
        className="checkout-form-input"
      />

      <div>
        <button className="checkout-button" onClick={handleSubmit}>
          Checkout
        </button>
      </div>

      {checkoutForm.error && <div className="error">Error: {checkoutForm.error}</div>}
      {successMessage && (
      <div className="success">
        Thank you for your purchase! Receipt: {successMessage}
      </div>
    )}
    </div>
  );
};


export default CheckoutForm;
