import React from "react";

export default function Card({photoInfo}) {
    return(
        <>
        <span className="cardDate" key="cardSpan">{photoInfo.date}</span>
        <div className="cardImg" key="imgDiv">
            <img src={photoInfo.url} alt={photoInfo.explanation} />
        </div>
        <div className="cardDetails">{photoInfo.title}{photoInfo.copyright}</div>
        <p className="cardExplanation">{photoInfo.explanation}</p>
        </>
    )
}