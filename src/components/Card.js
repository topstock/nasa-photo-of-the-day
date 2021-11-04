import React from "react";

export default function Card({photoInfo}) {
  if (!photoInfo.url) {
    return (<h3>Loading...</h3>)
  } else { 
    return(
      <>
      <span className="cardDate" key="cardSpan">{photoInfo.date}</span>
      <div className="cardImg" key="imgDiv">
          <img src={photoInfo.url} alt={photoInfo.explanation} />
      </div>
      <div className="cardDetails">{photoInfo.title}{photoInfo.copyright}</div>
      </>
    )
  }
}