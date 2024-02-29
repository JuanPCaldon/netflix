import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Routes} from "react-router-dom";
import { MovieDetails } from '../pages/MovieDetails';
import { LandingPages } from '../pages/LandingPages';
import { Navbar } from './Navbar';


export const App = () => {
  return (
    <Router>
        <header>
            <Navbar/>      
        </header>

        <main>
          <Routes>
           <Route path="/" element= {<LandingPages />}/> 
           <Route path="/movies/:movieId/:imagen" element = {<MovieDetails/> }/> 
          </Routes>     
        </main>
    </Router>
  )
}
