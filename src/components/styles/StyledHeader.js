import styled from 'styled-components'

export const StyledHeader = styled.div`
  background: #1c1c1c;
  padding: 0 20px;
  box-sizing: border-box;

  .header-content {
    max-width: 1280px;
    min-height: 120px;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0px;
    margin: 0 auto;
    box-sizing: border-box;

    a {
      text-decoration: none !important;
    }

    @media screen and (max-width: 500px) {
      max-width: 1280px;
      min-height: 0px;
    }
  }
`

export const StyledTitle = styled.h1`
font-family: 'Abel', sans-serif;
font-size: 3.5rem;
color: white;
text-align: center;
`

