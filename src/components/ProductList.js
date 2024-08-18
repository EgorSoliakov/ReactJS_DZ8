import React, { useState } from "react";
import ProductItem from "./ProductItem";

const products = [
  { id: 1, name: "Товар 1", size: "M", price: 100 },
  { id: 2, name: "Товар 2", size: "L", price: 200 },
  // Добавьте больше товаров по необходимости
];

const ProductList = () => {
  const [selectedSize, setSelectedSize] = useState("all");

  const filteredProducts =
    selectedSize === "all"
      ? products
      : products.filter((product) => product.size === selectedSize);

  return (
    <div>
      <h2>Каталог товаров</h2>
      <select onChange={(e) => setSelectedSize(e.target.value)}>
        <option value="all">Все размеры</option>
        <option value="S">S</option>
        <option value="XS">XS</option>
        <option value="M">M</option>
        <option value="L">L</option>
      </select>

      <div>
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
