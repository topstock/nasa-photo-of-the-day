import React from "react"
import SearchBar from "SearchBar"

export default function Header() {
    return(
        <>
    <div className="App-header">
      <img src="../../galaxy.png" alt="Galaxy icon" />
      <h1>Space Photos Sourced from NASA</h1>
     🔍
      <input type="search" value="YYYY-MM-DD" />
    </div>
  </>
)}
