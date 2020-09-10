import { useState, useEffect, useCallback } from 'react'

export const useHomeFetch = () => {
    const [games, setGames] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [heroImage, setHeroImage] = useState("")
    const [heroTitle, setHeroTitle] = useState("")
    const [nextPage, setNextPage] = useState("")



    const fetchGames = useCallback(async endpoint => {
        setError(false)
        setLoading(true)

        const isLoadMore = endpoint.search('page=')

        try {
            const result = await (await fetch(endpoint)).json()
            setHeroImage(result.results[1].background_image)
            setHeroTitle(result.results[1].name)
            setGames(isLoadMore === -1 ? result.results : [...games, ...result.results])
            setNextPage(result.next)
        } catch (error) {
            setError(true)
        }
        setLoading(false)
    }, [games])

    useEffect(() => {
        fetchGames('https://api.rawg.io/api/games?dates=2020-01-01,2020-12-31&ordering=-added&page_size=20')
    }, [])

    return [{ games, loading, error, heroImage, heroTitle, nextPage }, fetchGames]
}