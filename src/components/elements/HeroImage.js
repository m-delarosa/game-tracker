import React from 'react'
import { StyledHeroImage } from '../styles/StyledHeroImage'

const HeroImage = ({ image, title }) => (

    <StyledHeroImage image={image}>
        <div className="heroimage-content">
            <div className="heroimage-text">
                <h1>{title}</h1>
            </div>
        </div>
    </StyledHeroImage>
)

export default HeroImage    