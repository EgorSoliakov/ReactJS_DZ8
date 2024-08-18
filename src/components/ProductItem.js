import React from "react";

const ProductItem = ({ product }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>Размер: {product.size}</p>
      <p>Цена: ${product.price}</p>
      {/* Здесь вы можете добавить кнопку для добавления товара в корзину */}
    </div>
  );
};

export default ProductItem;
