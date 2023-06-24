import React from 'react';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import './Sidebar.css';

const Sidebar = ({
  isOpen,
  shoppingCart,
  products,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
  handleOnToggle
}) => {
  return (
    <section className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button className="toggle-button" onClick={handleOnToggle}>▶</button>
      {isOpen && (
        <React.Fragment>
          <ShoppingCart shoppingCart={shoppingCart} products={products} isOpen={isOpen} />
          <CheckoutForm
  checkoutForm={checkoutForm}
  handleOnCheckoutFormChange={handleOnCheckoutFormChange}
  handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
/>

        </React.Fragment>
      )}
    </section>
  );
};

export default Sidebar;
