import React from 'react'
import { Router } from '@reach/router'
import '../App.css'
import Home from './Home'
import { GlobalStyle } from './styles/GlobalStyle'
import Header from './elements/Header'
import Game from './Game'
import NotFound from './NotFound'

function App() {
  return (
    <>
      <Header />
      <Router>
        <Home path="/" />
        <Game path="/:gameId" />
        <NotFound default />
      </Router>
      <GlobalStyle />
    </>
  )
}

export default App
