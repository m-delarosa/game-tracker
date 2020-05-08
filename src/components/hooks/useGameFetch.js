import { useState, useEffect, useCallback } from 'react'

export const useGameFetch = gameSlug => {
    const [game, setGame] = useState([])
    const [clip, setClip] = useState("")
    const [preview, setPreview] = useState("")
    const [background, setBackground] = useState("")
    const [screenshots, setScreenshots] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const fetchData = useCallback(async () => {
        setError(false)
        setLoading(true)

        try {
            const endpoint = `https://api.rawg.io/api/games?search=${gameSlug}`
            const result = await (await fetch(endpoint)).json()
            setGame(result.results[0])
            setClip(result.results[0].clip.clips.full)
            setPreview(result.results[0].clip.preview)
            setBackground(result.results[0].background_image)
            setScreenshots(result.results[0].short_screenshots)
        } catch (error) {
            setError(true)

        }
        setLoading(false)

    }, [gameSlug])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return [game, clip, preview, background, screenshots, loading, error]
}

