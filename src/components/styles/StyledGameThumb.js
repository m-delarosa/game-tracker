import styled from 'styled-components'

export const StyledGameThumb = styled.div`
  img {
    width: 100%;
    height: 300px;
    transition: all 0.3s;
    object-fit: cover;
    border-radius: 15px;

    :hover {
      opacity: 0.8;
    }

    /* @media screen and (max-width: 1024px) {
      height: 300px;
    }

    @media screen and (max-width: 768px) {
      height: 350px;
    }

    @media screen and (max-width: 600px) {
      max-height: 300px;
    }

    @media screen and (max-width: 375px) {
      max-height: 450px;
    } */

    .clickable {
      cursor: pointer;
    }

  }

  h2 {
    font-family: 'Abel', sans-serif;
    font-size: 32px;
    margin-top: 20px;

    @media screen and (max-width: 768px) {
      font-size: 24px;
      margin-top: 10px;
    }
  }
`
