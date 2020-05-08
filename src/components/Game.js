import React from 'react'

//elements
import Navigation from './elements/Navigation'
import GameInfoBar from './elements/GameInfoBar'
import GameVideo from './elements/GameVideo'
import GameScreenShots from './elements/GameScreenShots'
import Spinner from './elements/Spinner'

//hook
import { useGameFetch } from './hooks/useGameFetch'

const Game = ({ gameSlug }) => {

    const [game, loading, error] = useGameFetch(gameSlug)

    console.log(game)

    return (
        <>
            <Navigation />
            <GameVideo />
            <GameInfoBar />
            <GameScreenShots />
            {/* <Spinner /> */}
        </>

    )

}

export default Game