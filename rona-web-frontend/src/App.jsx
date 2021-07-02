import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'
import Header from './components/Header'
import Home from './pages/Home';
function App() {

  return (
    <div className="rona-web-app">
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
        </Switch>
        
      </Router>
    </div>
  )
}

export default App
