import React from "react"
import galaxyLogo from "./galaxy.gif" 
import styled from "styled-components"

const StyledHeader = styled.header`
  * {
    background-color: #282c34;
    min-height: 10vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  .Header-image {
    height: 5vw;
    width: 5vw;
  }
`

const Header = ({searchDate}) => {
  return(
    <StyledHeader>  
      <div>
        <img className="Header-image" src={galaxyLogo} alt="Galaxy icon" />
        <h1>Space Photos Sourced from NASA</h1>
        <div >
          <span>Search by Date🔍</span>
          <input 
            type="search" 
            onKeyDown={ (e) => {
              if (e.key === "Enter") {
                searchDate(e.target.value);
              } 
            }}
          />
        </div>
      </div>
    </StyledHeader>
)}

export default Header