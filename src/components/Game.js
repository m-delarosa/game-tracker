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

    const [game, clip, preview, loading, error] = useGameFetch(gameSlug)

    const $video = document.querySelector('.video')
    console.log($video)

    // console.log(preview)
    // console.log(game.length > 0 ? game.clip.clip : "Initial State")

    if (error) return <div>Something went wrong ...</div>
    if (loading) return <Spinner />

    return (
        <>
            <Navigation name={game.name} />
            <GameVideo video={clip} preview={preview} />
            <GameInfoBar rating={game.rating} released={game.released} />
            <GameScreenShots />
        </>

    )

}

export default Game