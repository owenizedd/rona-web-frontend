import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

import { 
  Home, 
  About,
  Vaccines,
  Contact
} from './pages/';

function App() {

  return (
    <div className="rona-web-app">
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/vaccines" exact>
            <Vaccines/>
          </Route>
          <Route path="/about" exact>
            <About/>
          </Route>
          <Route path="/contact" exact>
            <Contact/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
