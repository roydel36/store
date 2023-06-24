import * as React from "react";
import "./Home.css";
import Hero from "../Hero/Hero";
import ProductGrid from "../ProductGrid/ProductGrid";
import Search from "../Search/Search";
import { useState } from "react";
import Category from "../Category/Category";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";

export default function Home({ products, handleAddItemToCart, handleRemoveItemFromCart }) {

  const [searchItem, setSearchItem] = useState("");
  const [activeCategory, setActiveCategory] = useState("");

  const handleSearchItem = (event) => {
    setSearchItem(event.target.value);
  };

  const handleUpdateCategory = (event) => {
    setActiveCategory(event.target.id);
  };

  return (
    <div className="home">
      <Hero />
      <Search searchItem={searchItem} handleSearchItem={handleSearchItem} />
      <Category handleUpdateCategory={handleUpdateCategory} />
      <ProductGrid
        products={products}
        searchItem={searchItem}
        activeCategory={activeCategory}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemFromCart={handleRemoveItemFromCart}
      />
      

      <h2 className="lol">About Us</h2>
      <About></About>
      <h2 className="lol">Contact Us</h2>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

