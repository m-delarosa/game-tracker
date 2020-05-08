import { useState, useEffect, useCallback } from 'react'

export const useGameFetch = gameSlug => {
    const [game, setGame] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const fetchData = useCallback(async () => {
        setError(false)
        setLoading(true)

        try {
            const endpoint = `https://api.rawg.io/api/games?search=${gameSlug}`
            const result = await (await fetch(endpoint)).json()
            setGame(result.results[0])
        } catch (error) {
            setError(true)

        }
        setLoading(false)

    }, [gameSlug])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return [game, loading, error]
}

