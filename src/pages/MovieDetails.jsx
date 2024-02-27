import React, { useEffect, useState } from 'react'
import styles from "./MovieDetails.module.css"
import { useParams } from 'react-router-dom'






export const MovieDetails = () => {

  const {movieId,imagen}= useParams();
  const imgurl= 'https://image.tmdb.org/t/p/w500/'+imagen;
  //
  //--------------------------------------LLAMADA A LA APi--------------------------------------
  const [movieList,setMovieList ] = useState([]) 

  const getmovie =() =>{
     fetch( `https://api.themoviedb.org/3/movie/${movieId}?api_key=846732871a6e9513dfec4a0a75821cc4`)
      .then(res => res.json() ) 
      .then(json=> setMovieList(json)) 
  }

  useEffect(()=>{
      getmovie()
  },[])  
  
  const {genres}= movieList; 
  
  return (
    <div 
         className={styles.detailsContainer}>
          <img className={styles.col+" "+styles.movieImg}
           src={imgurl}
           alt=""/>
          <div className={styles.col+" "+styles.movieDetails}>
              <p className={styles.firsItem}> <strong> Title: </strong> {movieList.title} </p>
              <p>
                  <strong>Genres: </strong>
                  { genres?genres.map((genero)=>  genero.name ).join(", "):null } 

              </p>
              <p> <strong>Description:</strong>{movieList.overview} </p>
          </div>


      
    </div>
  )
}
