import React from 'react'
import { Link } from '@reach/router'
import { StyledHeroImage } from '../styles/StyledHeroImage'

const HeroImage = ({ image, title, heroSlug }) => (

    <StyledHeroImage image={image}>
        <Link to={heroSlug}>
            <div className="heroimage-content">
                <div className="heroimage-text">
                    <h1>{title}</h1>
                </div>
            </div>
        </Link>
    </StyledHeroImage>
)

export default HeroImage    