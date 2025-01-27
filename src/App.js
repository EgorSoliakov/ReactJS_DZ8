import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact component={ProductList} />
        <Route path="/cart" component={Cart} />
      </Routes>
    </Router>
  );
};

export default App;
