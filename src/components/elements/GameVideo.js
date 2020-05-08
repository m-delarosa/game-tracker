import React from 'react'
import NoImage from '../images/no_image.jpg'
import { StyledGameVideo } from '../styles/StyledGameVideo'


const GameVideo = ({ video, preview }) => {



    return (
        // <video className='video' src={video} poster={preview} preload="true"></video>
        <StyledGameVideo>
            <video className='video' controls="true" name="media" poster={preview}><source src={video} type="video/mp4" /></video>
        </StyledGameVideo>
    )



}

export default GameVideo