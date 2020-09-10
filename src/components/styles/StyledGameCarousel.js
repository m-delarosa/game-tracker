import styled from 'styled-components'

export const StyledGameCarousel = styled.div`
  background-color: #353535;
  width: 100%;

  .react-multi-carousel-track {
    // justify-content: center;
    align-items: center;
  }

  video {
      cursor: pointer;
      width: 100%;
      height: 75%;
      display: block;
      margin: auto;

      @media screen and (min-width: 1280px) {
        width: 75%;
      }
  }

  img {
      width: 100%;
      display: block;
      margin: auto;

      @media screen and (min-width: 1280px) {
        width: 75%;
      }
  }


`