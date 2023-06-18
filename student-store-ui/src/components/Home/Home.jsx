import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import Search from "../Search/Search"
import Category from "../Category/Category"

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <Search />
      <Category />
    </div>
  )
}
