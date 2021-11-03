import React from "react"

export default function Header({setPhotoDate}) {
    return(
      <>
      <div className="App-header">
      <img src="../../galaxy.png" alt="Galaxy icon" />
      <h1>Space Photos Sourced from NASA</h1>
      🔍
      <input 
        type="text" 
        value="YYYY-MM-DD" 
        onKeyDown={(e) =>  e.code === "Enter"? setPhotoDate()}/>
      </div>
      </>
)}
