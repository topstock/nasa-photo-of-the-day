import React from "react"

export default function Header({photoDate, searchDate}) {
    return(
      <>
      <div className="App-header">
        <img src="../../galaxy.png" alt="Galaxy icon" />
        <h1>Space Photos Sourced from NASA</h1>
        🔍
        <input 
          id="searchBar"
          type="search" 
          onKeyDown={ (e) => {
            if (e.key === "Enter") {
              searchDate(e.target.value);
              console.log(photoDate);
            } 
          }}
        />
      </div>
      </>
)}
