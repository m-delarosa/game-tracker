import { useState, useEffect } from 'react'

export const useGameFetch = gameSlug => {
    const [game, setGame] = useState([])
    const [gameName, setGameName] = useState("")
    const [clip, setClip] = useState("")
    const [preview, setPreview] = useState("")
    const [background, setBackground] = useState("")
    const [screenshots, setScreenshots] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        let ignore = false
        const fetchData = async () => {
            setError(false)
            setLoading(true)

            try {
                if (!ignore) {
                    const endpoint = `https://api.rawg.io/api/games?search=${gameSlug}`
                    const result = await (await fetch(endpoint)).json()
                    setGame(result.results[0])
                    setGameName(result.results[0].name)
                    setClip(result.results[0].clip.clips.full)
                    setPreview(result.results[0].clip.preview)
                    setBackground(result.results[0].background_image)
                    setScreenshots(result.results[0].short_screenshots)
                }
            } catch (error) {
                setError(true)
            }
            setLoading(false)
        }

        fetchData()
        return () => { ignore = true }
    }, [])

    return [gameName, game, clip, preview, background, screenshots, loading, error]
}

