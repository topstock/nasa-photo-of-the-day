import React from "react";
import "./App.css";
import Card from "Card";
import SearchBar from "SearchBar";


function App() {
  return (
    <div className="App">
      <>
      <div>
        <h1>Space Photos Sourced from NASA</h1>
        {/*<SearchBar />*/}
      </div>
        <Card />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      </>
    </div>
  );
}

export default App;
