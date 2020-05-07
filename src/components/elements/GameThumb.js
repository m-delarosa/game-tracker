import React from 'react'
import { StyledGameThumb } from '../styles/StyledGameThumb'

const GameThumb = ({ image, gameID, clickable, name }) => (

    <StyledGameThumb image={image}>
        {
            clickable
                ? (<img className="clickable" src={image} alt="game thumbnail image" />)
                : (<img src={image} alt="game thumbnail image" />)
        }
        < h2 > {name}</h2>
    </StyledGameThumb >
)
export default GameThumb