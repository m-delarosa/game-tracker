import React, { useState } from 'react'

// element components
import Header from './elements/Header'
import HeroImage from './elements/HeroImage'
import SearchBar from './elements/SearchBar'
import Grid from './elements/Grid'
import GameThumb from './elements/GameThumb'
import LoadMoreBtn from './elements/LoadMoreBtn'
import Spinner from './elements/Spinner'
import NoImage from './images/no_image.jpg'

// hooks
import { useHomeFetch } from './hooks/useHomeFetch'

const Home = () => {
    const [{ games, loading, error, heroImage, heroTitle, nextPage }, fetchGames] = useHomeFetch()
    const [searchTerm, setSearchTerm] = useState("")
    const [currentSearchPage, setCurrentSearchPage] = useState(0)


    // console.log(games)
    // console.log(games.length > 0 ? games[0].name : "Initial State")

    const searchGames = search => {
        const endpoint =
            search
                ? `https://api.rawg.io/api/games?search=${search}`
                : 'https://api.rawg.io/api/games?dates=2020-01-01,2020-12-31&ordering=-added&page_size=20'

        setSearchTerm(search)
        setCurrentSearchPage(1)
        fetchGames(endpoint)
    }

    const loadMoreGames = () => {
        const searchEndpoint = `https://api.rawg.io/api/games?search=${searchTerm}&page=${currentSearchPage + 1}`
        const popularEndpoint = nextPage

        const endpoint =
            searchTerm
                ? searchEndpoint
                : popularEndpoint

        searchTerm
            ? setCurrentSearchPage(currentSearchPage + 1)
            : setCurrentSearchPage(0)
        // window.scrollTo({
        //     top: 0,
        //     behavior: "smooth"
        // })
        fetchGames(endpoint)

    }

    if (error) return <div>Something went wrong.</div>
    if (!games.length > 0) return <Spinner />

    const showGames = () => {
        return games.map(game => (
            <GameThumb
                key={game.id}
                clickable
                image={
                    game.background_image
                        ? game.background_image
                        : NoImage
                }
                name={game.name}
                gameID={game.id}
            />
        ))
    }

    return (
        <>
            <Header />
            <HeroImage image={heroImage} title={heroTitle} />
            <SearchBar callback={searchGames} />
            <Grid header={searchTerm ? 'Search Result' : 'Popular New Releases'}>
                {showGames()}
            </Grid>
            {loading && <Spinner />}
            {!loading && (<LoadMoreBtn callback={loadMoreGames} />)}

        </>
    )

}


export default Home