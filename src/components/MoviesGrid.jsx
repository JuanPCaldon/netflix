import React, { useEffect, useState } from 'react'
import { MovieCard } from './MovieCard'
import styles from "./MoviesGrid.module.css"
import { Spiner } from './Spiner'

import { useQuery } from '../hooks/useQuery'





 export const MoviesGrid = () => {

  const [movieList,setMovieList ] = useState([]) 
  const [Isloading, setIsloading] = useState(true) 
  const Query = useQuery();
  const Search= Query.get("search");
  console.log(Search);
  

  const getmovie =(url) =>{
     fetch( `https://api.themoviedb.org/3${url}api_key=846732871a6e9513dfec4a0a75821cc4`)
     .then(res => res.json())
     .then(json=> setMovieList(json.results)) 
  }

  useEffect(()=>{
   setIsloading(true);
   const searchUrl = Search
    ? "/search/movie?query="+Search+"&"
    : "/discover/movie?";
      getmovie(searchUrl)
    setIsloading(false);  
  },[Search])

 

if(Isloading){
   return <Spiner/>


}
return (
   <ul className={styles.moviesGrid}>
     { movieList.map((movie) => ( 
      // <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}/>

      <MovieCard id={movie.id} titulo={movie.title} imagen={movie.poster_path} />
      
      ))    }  
     
   </ul>
  )
}
