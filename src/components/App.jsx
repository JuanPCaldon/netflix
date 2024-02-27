import React from 'react'
import styles from './App.module.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Routes} from "react-router-dom";
import { MovieDetails } from '../pages/MovieDetails';
import { LandingPages } from '../pages/LandingPages';


export const App = () => {


  return (
    <Router>
        <header>
             <h1 className= {styles.tittle} >
                 <Link className={styles.netflix} to="/"> 
                    <img src='./logo/Netflix-Logo.png' alt="logo_netflix" />
                  </Link>          
              </h1>
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
