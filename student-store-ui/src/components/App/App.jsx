import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import ProductDetail from "../ProductDetail/ProductDetail";
import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "../Sidebar/Sidebar"

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3007/store").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Sidebar />
          <Navbar />
          <Routes>
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="/" element={<Home products={products} />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
