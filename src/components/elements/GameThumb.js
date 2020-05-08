import React from 'react'
import { StyledGameThumb } from '../styles/StyledGameThumb'

const GameThumb = ({ image, gameID, clickable, name }) => (

    <StyledGameThumb image={image}>
        {
            clickable
                ? (<img className="clickable" src={image} alt={name} />)
                : (<img src={image} alt={name} />)
        }
        < h2 >{name}</h2>
    </StyledGameThumb >
)
export default GameThumb