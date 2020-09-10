import React, { useState } from 'react'
import HeroImage from './elements/HeroImage'
import SearchBar from './elements/SearchBar'
import Grid from './elements/Grid'
import GameThumb from './elements/GameThumb'
import LoadMoreBtn from './elements/LoadMoreBtn'
import Spinner from './elements/Spinner'
import NoImage from './images/no_image.jpg'
import { useHomeFetch } from './hooks/useHomeFetch'

const Home = () => {
    const [{ games, loading, error, heroImage, heroTitle, heroSlug, nextPage }, fetchGames] = useHomeFetch()
    const [searchTerm, setSearchTerm] = useState("")
    const [currentSearchPage, setCurrentSearchPage] = useState(0)

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
                gameSlug={game.slug}
            />
        ))
    }

    return (
        <>
            <HeroImage image={heroImage} title={heroTitle} heroSlug={heroSlug} />
            <SearchBar callback={searchGames} />
            <Grid header={searchTerm ? 'Search Result' : 'Trending'}>
                {showGames()}
            </Grid>
            {loading && <Spinner />}
            {!loading && (<LoadMoreBtn callback={loadMoreGames} />)}
        </>
    )

}

export default Home
