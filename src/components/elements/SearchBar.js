import React, { useState, useRef } from 'react'
import FontAwesome from 'react-fontawesome'

import { StyledSearchBar, StyledSearchBarContent } from '../styles/StyledSearchBar'

const SearchBar = ({ callback }) => {

    const [state, setState] = useState('')
    const timeOut = useRef(null)

    return (
        <StyledSearchBar>
            <StyledSearchBarContent>
                <FontAwesome className="fa-search" name="search" size="2x" />
                <input type="text" placeholder="Find a Game" onChange={doSearch} value={state} />
            </StyledSearchBarContent>
        </StyledSearchBar>

    )
}

export default SearchBar