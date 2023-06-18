import React from 'react'
import "./Category.css"

const Category = ({handleUpdateCategory}) => {
  return (
    <div className = "category">
    <button className = "select" id = "" onClick={handleUpdateCategory}>All Categories</button>
    <button className = "select" id = "clothing" onClick={handleUpdateCategory}>Clothing</button>
    <button className = "select" id = "food" onClick={handleUpdateCategory}>Food</button>
    <button className = "select" id = "accessories" onClick={handleUpdateCategory}>Accessories</button>
    <button className = "select" id = "tech" onClick={handleUpdateCategory}>Tech</button>
    </div>
  )
}
export default Category