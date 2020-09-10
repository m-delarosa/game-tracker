import styled from 'styled-components'

export const StyledGameInfoBar = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  min-height: 100px;
  height: auto;
  background: #1c1c1c;
  padding: 20px;
  box-sizing: border-box;
  font-family: 'Abel', sans-serif;
  font-size: 22px;


  .gameinfobar-content {
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    color: #fff;
    display: flex;
  }

  .gameinfobar-content-col {
    width: 33.33%;
    box-sizing: border-box;
    padding: 10px 20px 0 0;
    text-align: center;
  }

  .gameinfobar-info {
    padding: 5px 0 0 10px;
  }

  @media screen and (max-width: 768px) {
    justify-content: center;

    .gameinfobar-content {
    flex-direction: column;
    justify-content: center;
    }

    .gameinfobar-content-col {
      width: 100%;
      padding-right: 0px;
    }

    .gameinfobar-info {
      padding: 0;
    }
  }
`
