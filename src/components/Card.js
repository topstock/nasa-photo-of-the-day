import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`  

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
  }

  img {
    box-shadow: 5vw 5vw 10vw -5vw lightgrey, -5vw -5vw 10vw -10vw palegoldenrod;
  }

  h3 {
    color: black;
    font-size: large;
  }
`

const Card = ({photoInfo}) => {
  if (!photoInfo.url) {
    return (<h3>Loading...</h3>)
  } else { 
    return(
      <StyledCard>
        <div>
          <span className="cardDate" key="cardSpan">{photoInfo.date}</span>
            <img src={photoInfo.url} alt={photoInfo.explanation} />
          <span className="cardDetails">{photoInfo.title}{photoInfo.copyright}</span>
        </div>
      </StyledCard>
    )
  }
}

export default Card