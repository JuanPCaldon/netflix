import React, { useEffect, useState } from 'react'
import { useQuery } from '../hooks/useQuery';
import { Spiner } from './Spiner';
import { MovieCard } from './MovieCard';
import styles from './CaruselImg.module.css'
import { Link } from 'react-router-dom';


export const CaruselImg = () => {

  const [movieList,setMovieList ] = useState([]) 
  const [Isloading, setIsloading] = useState(true) 
  const [Peliculas , setPeliculas] = useState(null)
  const Query = useQuery();
  const Search= Query.get("search");
  //console.log(Search);
  

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



//console.log(movieList)
  return (
              
    <div id="carouselExampleIndicators" class="carousel slide">
    <div class={`carousel-indicators`}>
       
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
    </div>
    <div class="carousel-inner">
        <h1 className={styles.TituloCarousel}> Popular en Netflix</h1>
          <div class="carousel-item active">
            <div className={styles.tituloycarousel}>
              
                 <div className={'d-flex justify-content-center p-5'}>
                      { movieList.map((movie, index) => ( 
                          
                        <Link   to={"/movies/"+movie.id+movie.poster_path}>

                          {
                            index < 6 && <img key={movie.id} 
                            className={`${styles.imgcarousel} + d-block w-100 ms-2 p-1`}
                            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                            width={230}
                            height={345}
                           
                            />
                             
                             }                     
                         </Link>
                      
                      )) }  
                  </div>
              </div>
          </div>
                        
      <div class="carousel-item">
          
      <div className={styles.tituloycarousel}>
              
              <div className={'d-flex justify-content-center p-5'}>
                   { movieList.map((movie, index) => ( 
                     
                     index < 6 && <img class= {`${styles.imgcarousel} + d-block w-100 m-1 rounded `}
                     src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                     width={214}
                     height={121}
                     />
                     
                     ))    }  
               </div>
           </div>
       </div>  
    </div>
    <button class={`${styles.prevbutton} + carousel-control-prev`} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class={`${styles.nextbutton} + carousel-control-next`} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>


  )
}
