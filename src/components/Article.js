import React from "react";
import styled from "styled-components"

const StyledArticle = styled.article`
  p {
    font-family: "Libre Caslon Text", serif;
    padding-bottom: 10vw;
    width: 70vw;
    color: darkslategray;
    border: 0px 0px 10px 0px #8A8AFF;
    border-radius: 2px;
    ${props => (props.type === "primary" ? `box-shadow: 5px 5px 5px 5px #404066` : null )}
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