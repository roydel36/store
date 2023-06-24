import React from 'react';
import './CheckoutForm.css';

const CheckoutForm = ({
  isOpen,
  shoppingCart,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm
}) => {
  const handleSubmit = () => {
    handleOnSubmitCheckoutForm();
  };

  return (
    <div className="checkout-form">
      <input
        type="email"
        name="email"
        placeholder="student@codepath.org"
        value={checkoutForm.email}
        onChange={(e) => handleOnCheckoutFormChange("email", e.target.value)}
        className="checkout-form-input"
      />

      <input
        type="text"
        name="name"
        placeholder="Student Name"
        value={checkoutForm.name}
        onChange={(e) => handleOnCheckoutFormChange("name", e.target.value)}
        className="checkout-form-input"
      />

      <div>
        <button className="checkout-button" onClick={handleSubmit}>
          Checkout
        </button>
      </div>

      {checkoutForm.error && (
        <div className="error">
          Error: {checkoutForm.error}
        </div>
      )}

      {checkoutForm.success && (
        <div className="success">
          Success! Receipt: {checkoutForm.receipt}
        </div>
      )}
    </div>
  );
};


export default CheckoutForm;
