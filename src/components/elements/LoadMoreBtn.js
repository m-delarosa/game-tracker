import React from 'react'
import { StyledLoadMoreBtn } from '../styles/StyledLoadMoreBtn'

const LoadMoreBtn = ({ callback }) => (
    <StyledLoadMoreBtn type="button" href="#" onClick={callback} >
        Load More
    </StyledLoadMoreBtn>

)

export default LoadMoreBtn