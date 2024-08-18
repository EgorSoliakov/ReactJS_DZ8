import React, { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Товар 1", price: 100, quantity: 1 },
    { id: 2, name: "Товар 2", price: 200, quantity: 1 },
    // Добавьте больше товаров по необходимости
  ]);

  const handleQuantityChange = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const grandTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Корзина</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Цена: ${item.price}</p>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) =>
              handleQuantityChange(item.id, Number(e.target.value))
            }
            min="1"
          />
        </div>
      ))}
      <h3>Общая сумма: ${grandTotal}</h3>
    </div>
  );
};

export default Cart;
