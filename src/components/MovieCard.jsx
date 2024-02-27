import React from 'react'
import styles from './MovieCard.module.css'
import { Link } from 'react-router-dom';

export const MovieCard = ({id,titulo,imagen}) => {

  const imgurl= 'https://image.tmdb.org/t/p/w300/'+imagen;
  return (

    <li className={styles.movieCard} >
      
      <Link to={"/movies/"+id+imagen}>

      <img 
        width={230}
        height={345} 
        className={styles.movieImage} 
        src={imgurl} 
        alt={titulo}
        
        />
      </Link> 
      <div> {titulo} 
      
       </div>
    </li>
  )
}
