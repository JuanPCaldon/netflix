import React, { useEffect, useState } from 'react'
import { useQuery } from '../hooks/useQuery'
import styles from './CaruselImg.module.css'
import { Link } from 'react-router-dom'




export const Nowplay = () => {

  const [movieList,setMovieList ] = useState([]) 
  const [currentPage,setcurrentPage] = useState(1)
  const url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${currentPage}`;
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDY3MzI4NzFhNmU5NTEzZGZlYzRhMGE3NTgyMWNjNCIsInN1YiI6IjY1ZDY0YTU3ZTZkM2NjMDE3YmMwZTU1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oEACcqWQmCfHMobWqDCq3lkVnfEY5GLT5lk0ksm-56k'
  }
};


fetch(url, options)
  .then(res => res.json())
  .then(json => setMovieList(json.results))
  .catch(err => console.error('error:' + err));


  useEffect(()=>{
    
   },[])
   
    
   const Seccion1 = movieList.slice(0, 6)
   const Seccion2 = movieList.slice(7, 13)
   const Seccion3 = movieList.slice(14, 20)




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
        <h1 className={styles.TituloCarousel}> Ver ahora </h1>
          <div class="carousel-item active">
            <div className={styles.tituloycarousel}>
              
                 <div className={'d-flex justify-content-center p-5'}>
                      { Seccion1.map((movie) => ( 
                          
                            <Link   to={"/movies/"+movie.id+movie.poster_path}>

                              {
                                    <img key={movie.id} 
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
                            { Seccion2.map((movie) => ( 
                                
                                  <Link   to={"/movies/"+movie.id+movie.poster_path}>

                                    {
                                          <img key={movie.id} 
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
