import styled from 'styled-components'

export const StyledSpinner = styled.div`
  border: 5px solid #f3f3f3; /* Light grey */
  border-top: 5px solid #16d47b; /* Blue */
  border-radius: 50%;
  width: 500px;
  height: 500px;
  animation: spin 0.8s linear infinite;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;

  @media screen and (max-width: 720px) {
    width: 200px;
    height: 200px;
    margin-top: 100px;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
