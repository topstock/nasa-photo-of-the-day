import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "Card";
import axios from "axios";
import URL_WITH_KEY from "''"
function App() {
  const [photoDate, setPhotoDate] = useState("2000-01-01");
  const [photoInfo, setPhotoInfo] = useState({});
 
  const searchDate = date => {
    setPhotoDate(date)
  }

  useEffect(() => {
    axios.get(`${URL_WITH_KEY}&${photoDate}`)
      .then( res => {
        console.log(res.data)
        setPhotoInfo(res.data);
      })
      .catch(err => console.error(err))
    }, [])

  return (
    <div className="App">
      <Header 
        photoDate={photoDate} 
        setPhotoDate={photoDate}
        photoInfo={photoInfo} 
        setPhotoInfo={setPhotoInfo} 
        
      />
      <>
        <Card />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      </>
    </div>
  )
}

export default App;
