import React from "react";
import "./ShoppingCart.css";

export default function ShoppingCart({ isOpen, products, shoppingCart }) {
  const calculateSubtotal = () => {
    let subtotal = 0;
    for (let item of shoppingCart) {
      const product = products.find((p) => p.id === item.itemId);
      if (product) {
        subtotal += product.price * item.quantity;
      }
    }
    return subtotal.toFixed(2);
  };

  const calculateTotalPrice = () => {
    const subtotal = parseFloat(calculateSubtotal());
    const taxRate = 0.0875; // 8.75% tax rate
    const taxAmount = (subtotal * taxRate).toFixed(2);
    const totalPrice = (subtotal + parseFloat(taxAmount)).toFixed(2);
    return totalPrice;
  };

  return (
    <div className={`shopping-cart ${isOpen ? "open" : "closed"}`}>
      {shoppingCart.length === 0 ? (
        <div className="notification">
          <p>No items added to the cart yet. Start shopping now!</p>
        </div>
      ) : (
        <>
          {shoppingCart.map((item) => {
            const product = products.find((p) => p.id === item.itemId);
            if (!product) {
              return null; 
            }
            const subtotal = (product.price * item.quantity).toFixed(2);
            return (
              <div key={item.itemId} className="cart-item">
                <p className="cart-product-name">{product.name}</p>
                <p className="cart-product-quantity">Quantity: {item.quantity}</p>
                <p className="cart-product-price">${subtotal}</p>
              </div>
            );
          })}
  
          <br></br>
          <br></br>
          <div className="cart-summary">
            <p className="cart-subtotal">Subtotal: ${calculateSubtotal()}</p>
            <p className="cart-total">Total: ${calculateTotalPrice()}</p>
          </div>
        </>
      )}
    </div>
  );
  
}
