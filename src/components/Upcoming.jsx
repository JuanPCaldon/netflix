import React, { useEffect, useState } from 'react'
import styles from './CaruselImg.module.css'
import { Link } from 'react-router-dom'


export const Upcoming = () => {

    const [movieList,setMovieList ] = useState([]) 
    const [page,setpage]=useState(1)

    const url = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDY3MzI4NzFhNmU5NTEzZGZlYzRhMGE3NTgyMWNjNCIsInN1YiI6IjY1ZDY0YTU3ZTZkM2NjMDE3YmMwZTU1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oEACcqWQmCfHMobWqDCq3lkVnfEY5GLT5lk0ksm-56k'
      }
    };
    
    useEffect(()=>{ 

        fetch(url, options)
        .then(res => res.json())
        .then(json => setMovieList(json.results))
        .catch(err => console.error('error:' + err));
      
       },[])
       const Seccion1 = movieList.slice(0, 6)
       const Seccion2 = movieList.slice(7, 13)
       const Seccion3 = movieList.slice(14, 20)
      


  return (
    <div id="carousel4" class="carousel slide">
    <div class={`carousel-indicators`}>
       
      <button type="button" data-bs-target="#carousel4" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carousel4" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carousel4" data-bs-slide-to="2" aria-label="Slide 3"></button>

    </div>
    <div class="carousel-inner">
        <h1 className={styles.TituloCarousel}> Proximamente </h1>
          <div class="carousel-item active">
            <div className={styles.tituloycarousel}>
              
                 <div className={'d-flex justify-content-center p-5'}>
                   

                      { 
                          Seccion1.map((movie) => ( 
                          
                            <Link   to={"/movies/"+movie.id+movie.poster_path}>
                              
                              {   
                                  
                                    <img key={movie.id} 
                                    className={`${styles.imgcarousel} + d-block w-100 ms-2 p-1`}
                                    src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                                    width={230}
                                    height={345}
                                    alt=''
                                  
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
                                          alt=''
                                        
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
                          { Seccion3.map((movie) => ( 
                              
                                <Link   to={"/movies/"+movie.id+movie.poster_path}>

                                  {
                                        <img key={movie.id} 
                                        className={`${styles.imgcarousel} + d-block w-100 ms-2 p-1`}
                                        src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                                        width={230}
                                        height={345}
                                        alt=''
                                      
                                        />
                                    
                                    }                     
                                </Link>
                          
                    )) }  
                </div>
         </div>
     </div>   
   


    </div>




    <button class={`${styles.prevbutton} + carousel-control-prev`} type="button" data-bs-target="#carousel4" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class={`${styles.nextbutton} + carousel-control-next`} type="button" data-bs-target="#carousel4" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>



  )
}





  