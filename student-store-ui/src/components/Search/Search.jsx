import * as React from "react"
import "./Search.css"

const Search = ({searchItem,handleSearchItem}) => {
  return (
    <div className = "searchBar">
        <input type = "text" 
        onChange = {handleSearchItem} value = {searchItem} 
        placeholder = "Enter an item"/>
    </div>
  )
}

export default Search