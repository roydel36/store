import * as React from "react"
import { BrowserRouter } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import "./App.css"
import ProductDetail from "../ProductDetail/ProductDetail"
import axios from 'axios'
import { useState } from "react"
import { useEffect } from "react"
import {Routes, Route } from 'react-router-dom'


export default function App() {

  let [products,setProducts] = useState([])
  
    useEffect(() => {
      
        axios.get('https://codepath-store-api.herokuapp.com/store').then((response) => {
          setProducts(response.data.products);
        })
    }, [])

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Routes>
          <Route path = "/products/:productId" element = {<ProductDetail></ProductDetail>}></Route>
          <Route path = "/" element = {<Home products = {products} />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
