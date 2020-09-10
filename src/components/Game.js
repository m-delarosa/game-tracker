import React from 'react'
import Navigation from './elements/Navigation'
import GameInfoBar from './elements/GameInfoBar'
import GameCarousel from './elements/GameCarousel'
import Spinner from './elements/Spinner'
import { useGameFetch } from './hooks/useGameFetch'
import { StyledGame } from './styles/StyledGame'

const Game = ({ gameSlug }) => {
    const [name, game, clip, preview, background, screenshots, loading, error] = useGameFetch(gameSlug)

    if (error) return <div>Something went wrong ...</div>
    if (loading) return <Spinner />

    return (
        <StyledGame>
            <Navigation name={name} />
            <GameCarousel video={clip} preview={preview} background={background} screenshots={screenshots} gameSlug={gameSlug} />
            <GameInfoBar rating={game.rating} released={game.released} platforms={game.platforms} />
        </StyledGame>
    )

}

export default Game