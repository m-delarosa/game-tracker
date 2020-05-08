import React from 'react'
import { Link } from '@reach/router'
import { StyledGameThumb } from '../styles/StyledGameThumb'

const GameThumb = ({ image, gameID, clickable, name }) => (

    <StyledGameThumb image={image}>
        {
            clickable
                ? (
                    <Link to={`/${gameID}`} >
                        <img className="clickable" src={image} alt={name} />
                    </Link>
                )
                : (<img src={image} alt={name} />)
        }
        < h2 >{name}</h2>
    </StyledGameThumb >
)
export default GameThumb