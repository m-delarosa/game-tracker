import React from 'react'
import { Link } from '@reach/router'

import { StyledHeader, StyledTitle } from '../styles/StyledHeader'

const Header = () => (

    <StyledHeader>
        <div className="header-content">
            <Link to="/">
                <StyledTitle>Game_Tracker</StyledTitle>
            </Link>
        </div>
    </StyledHeader>
)

export default Header