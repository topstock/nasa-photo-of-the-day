import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./Card";
import Header from "./Header";
import axios from "axios";
import {URL_WITH_KEY} from "../constants/constants";
function App() {
  const [photoDate, setPhotoDate] = useState("2000-01-01");
  const [photoInfo, setPhotoInfo] = useState({});
 
  const searchDate = date => {
    setPhotoDate(date)
  }
/*
  useEffect(() => {
    axios.get(`${URL_WITH_KEY}&date=${photoDate}`)
      .then( res => {
        console.log(res.data)
        setPhotoInfo(res.data);
      })
      .catch(err => console.error(err))
    }, [photoDate])
*/
  return (
    <div className="App">
      
      <Header 
        photoDate={photoDate} 
        setPhotoDate={photoDate}
      />
      
      <Card 
        photoInfo={photoInfo} 
      />
    
    </div>
  )
}

export default App;
