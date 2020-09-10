import React from 'react'
import { StyledGameInfoBar } from '../styles/StyledGameInfoBar'

const GameInfoBar = ({ rating, released, platforms }) => {
    const displayPlatforms = () => {
        if (platforms) {
            let result = ""

            for (let i = 0; i < platforms.length; i++) {
                i === platforms.length - 1
                    ? result += ` ${platforms[i].platform.name}`
                    : result += ` ${platforms[i].platform.name},`
            }

            return result
        }

    }

    return (
        <StyledGameInfoBar>
            <div className="gameinfobar-content">
                <div className="gameinfobar-content-col">
                    <span className="gameinfobar-info">
                        Platforms: {displayPlatforms()}
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