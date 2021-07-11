import React, { useState, useContext } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'

import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

import { 
  Home, 
  About,
  Vaccines,
  Contact,
  Team,
  Center
} from './pages/';

function App() {
  const location = useLocation();
  const pathName = location.pathname;
  return (
    <div className="rona-web-app">
      


        { 
          pathName === "/" ? 
            <Header bg="normal"/>
            :
            <Footer/>
        }
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
          <Route path="/team" exact>
            <Team/>
          </Route>
          <Route path="/center" exact>
            <Center/>
          </Route>
        </Switch>
        { 
          pathName !== "/" ? 
            <Header bg="grey"/>
            :
            <Footer/>
        }
    </div>
  )
}

export default App
