import React from 'react'
import { playstation, xbox, windows } from '../images/platformIcons'

import { StyledGameInfoBar } from '../styles/StyledGameInfoBar'

const GameInfoBar = ({ rating, released }) => {

    return (
        <StyledGameInfoBar>
            <div className="gameinfobar-content">
                <div className="gameinfobar-content-col">
                    <span className="gameinfobar-info">
                        Platforms: {windows}{xbox}{playstation}
                    </span>
                </div>
                <div className="gameinfobar-content-col">
                    <span className="gameinfobar-info">
                        Rating: {rating}/5
                    </span>
                </div>
                <div className="gameinfobar-content-col">
                    <span className="gameinfobar-info">
                        Release Date: {released}
                    </span>
                </div>

            </div>
        </StyledGameInfoBar>
    )

}

export default GameInfoBar