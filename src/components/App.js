import React, { useState, useEffect } from "react";
import Card from "./Card";
import Header from "./Header";
import Article from "./Article";
import axios from "axios";
import {URL_WITH_KEY} from "../constants/constants";
import styled from "styled-components";

const StyledApp = styled.app`
.App {
  text-align: center;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


.App-logo {
  height: 40vmin;
  pointer-events: none;
}

.SearchBar {
  display: flex;
  flex-direction: row;
}


`

function App() {
  const [photoDate, setPhotoDate] = useState("2000-01-01");
  const [photoInfo, setPhotoInfo] = useState({});
 
  const searchDate = date => {
    setPhotoDate(date)
  }

  useEffect(() => {
    axios.get(`${URL_WITH_KEY}&date=${photoDate}`)
      .then( res => {
        setPhotoInfo(res.data);
      })
      .catch(err => console.error(err))
    }, [photoDate])

  return (
    <StyledApp>
      
      <Header 
        photoDate={photoDate} 
        searchDate={searchDate}
      />
      
      <Card photoInfo={photoInfo} />

      <Article type="primary" explanation={photoInfo.explanation} />

    </StyledApp>
  )
}

export default App;
