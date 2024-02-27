import React, { useEffect, useState } from 'react'
import { MovieCard } from './MovieCard'
import styles from "./MoviesGrid.module.css"


 export const MoviesGrid = () => {

  const [movieList,setMovieList ] = useState([]) 

  const getmovie =() =>{
     fetch( "https://api.themoviedb.org/3/discover/movie?api_key=846732871a6e9513dfec4a0a75821cc4")
     .then(res => res.json())
     .then(json=> setMovieList(json.results)) 
  }

  useEffect(()=>{
      getmovie()
  },[])

return (
   <ul className={styles.moviesGrid}>
     { movieList.map((movie) => ( 
      // <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}/>

      <MovieCard id={movie.id} titulo={movie.title} imagen={movie.poster_path} />
      
      ))    }  
     
   

   </ul>
  )
}
