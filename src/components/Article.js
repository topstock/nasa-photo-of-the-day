import React from "react";
import styled from "styled-components"

const StyledArticle = styled.article`
  p {
    font-family: "Libre Caslon Text", serif;
    text-align: center;
    padding-bottom: 10vw; 
    margin-left: 15vw;
    width: 70vw;
    color: darkslategray;
    border: 0px 0px 10px 0px #8A8AFF;
    border-radius: 2px;
  }
`

const Article = ({explanation}) => {
  return(
    <StyledArticle>
      <p>{explanation}</p>
    </StyledArticle>
  )
}

export default Article