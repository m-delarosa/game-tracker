import React from 'react'
// import { Router } from '@reach/router'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import '../App.css'
import Home from './Home'
import { GlobalStyle } from './styles/GlobalStyle'
import Header from './elements/Header'
import Game from './Game'
import NotFound from './NotFound'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:gameSlug" component={Game} />
        <Route default component={NotFound} />
        {/* <Game path="/:gameSlug" /> */}
      </Switch>
      {/* <NotFound default /> */}
      <GlobalStyle />
    </Router>
  )
}

export default App
