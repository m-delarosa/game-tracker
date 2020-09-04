import React from 'react'

//elements
import Navigation from './elements/Navigation'
import GameInfoBar from './elements/GameInfoBar'
import GameVideo from './elements/GameVideo'
import GameScreenShots from './elements/GameScreenShots'
import Spinner from './elements/Spinner'

//hook
import { useGameFetch } from './hooks/useGameFetch'

const Game = props => {
    const { match: { params } } = props
    console.log(props)
    const [game, clip, preview, background, screenshots, loading, error] = useGameFetch(params.gameSlug)
    const $video = document.querySelector('.video')

    if (error) return <div>Something went wrong ...</div>
    if (loading) return <Spinner />

    return (
        <>
            <Navigation name={game.name} />
            <GameVideo video={clip} preview={preview} background={background} screenshots={screenshots} />
            <GameInfoBar rating={game.rating} released={game.released} />
        </>
    )

}

export default Game