import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import Search from "../Search/Search"

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <Search />
    </div>
  )
}
