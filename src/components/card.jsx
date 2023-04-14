import React from 'react'
import { StyledCard } from './styles/card.styled'
const Card = (props) => {
    const {content} = props
  return (
    <StyledCard>
        <div>
            <h2>{content.title}</h2>
            <p>{content.body}</p>
        </div>
        <div>
            <img src={`./images/${content.image}`} alt="" />
        </div>
    </StyledCard>
  )
}

export default Card