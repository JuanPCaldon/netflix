import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Routes} from "react-router-dom";
import { MovieDetails } from '../pages/MovieDetails';
import { LandingPages } from '../pages/LandingPages';
import { LoginPage } from '../pages/LoginPage';


export const App = () => {
  return (
    <Router> 
          
           <Routes>
           <Route path='/' element={<LoginPage/>} />
           <Route path="/Landing" element= {<LandingPages />}/>  
           <Route path="/movies/:movieId/:imagen" element = {<MovieDetails/> }/> 
          </Routes>     
        
    </Router>
  )
}
