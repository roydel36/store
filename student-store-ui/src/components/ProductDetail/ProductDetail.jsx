import React, { useEffect, useState } from 'react'
import "./ProductDetail.css"
import { useParams } from 'react-router-dom'
import ProductView from "../ProductView/ProductView"
import axios from 'axios'

const ProductDetail = () => {
  const [product, setProducts] = useState([])
  const {productId} = useParams()
  let showDescription = false
  useEffect(() => {
    axios.get(`https://codepath-store-api.herokuapp.com/store/${productId}`).then((response) => {
      setProducts(response.data.product);
    })
}, 
[])
  return (
    <div className = "product-detail">
      <ProductView product = {product} productId = {productId} showDescription = {showDescription}/>
      </div>
  )
}
export default ProductDetail