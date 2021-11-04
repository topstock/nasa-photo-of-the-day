import React from "react"
import galaxyLogo from "./galaxy.gif" 

export default function Header({photoDate, searchDate}) {
    return(
      <>
      <div className="App-header">
        <img className="Header-image" src={galaxyLogo} alt="Galaxy icon" />
        <h1>Space Photos Sourced from NASA</h1>
        <div className="SearchBar">
          <span>Search by Date🔍</span>
          <input 
            type="search" 
            onKeyDown={ (e) => {
              if (e.key === "Enter") {
                searchDate(e.target.value);
                console.log(photoDate);
              } 
            }}
          />
        </div>
      </div>
      </>
)}
