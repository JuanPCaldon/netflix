
import React from 'react'
import { Nowplay } from '../components/Nowplay'
import { TopRate } from '../components/TopRate'
import { Popular } from '../components/Popular'
import { Upcoming } from '../components/Upcoming'
import { Displayapp } from '../components/Displayapp'
import styles from './LandingPages.module.css'
import { Navbar } from '../components/Navbar'

import { useQuery } from '../hooks/useQuery'

import { MoviesGrid } from '../components/MoviesGrid'


export const LandingPages = () => {


  const Objvideo = {
        opcion1 : {
          name: "Interestellar",
          age: "16+",
          description:"The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage. " ,
          path:'./Interestelar2.mp4'},

        opcion2 : {
          name:"Avengers:Endgame",
          age: "15+",
          description: "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
          path: "./Avengers.mp4"

        },
        opcion3 :{
          name: "Saving Private Ryan",
          age: "17+",
          description:"As U.S. troops storm the beaches of Normandy, three brothers lie dead on the battlefield, with a fourth trapped behind enemy lines. Ranger captain John Miller and seven men are tasked with penetrating German-held territory and bringing the boy home.",
          path:'./Soldadoryan2.mp4',

        },
        
        opcion4 :
        { 
          name: "I Am Legend",
          age: "17+" ,
          description: "Robert Neville is a scientist who was unable to stop the spread of the terrible virus that was incurable and man-made. Immune, Neville is now the last human survivor in what is left of New York City and perhaps the world. For three years, Neville has faithfully sent out daily radio messages",
          path:'./Soyleyenda.mp4'
          
        }
           
  }

  
  const videoramdom = () =>{
    const keys = Object.keys(Objvideo);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return Objvideo[randomKey];

  }

  const Query = useQuery();
  const Search= Query.get("search");

  const Moviehead = videoramdom();
  




  return (
         <div className={styles.hero}>
                <div className={styles.videobag}>


                  <div className={styles.videobag_intro}>
                      <div className={styles.landingnav}>
                        <Navbar/>      
                      </div>

                    { Search ? <MoviesGrid/> :

                      <React.Fragment>

                            <section className={styles.Displayapp}>
                              <Displayapp 
                                    description={Moviehead.description} 
                                    name={Moviehead.name} 
                                    age={Moviehead.age}
                                 
                                    
                                    />

                            </section> 


                      </React.Fragment>                         
                    }
                  </div>
                

              </div>
              {Search ? <MoviesGrid/> :(

                    <React.Fragment> 
                        


                        <video 
                           
                            autoPlay={true}
                            loop={true}
                            src= {Moviehead.path}>
                        </video> 

                        <section >
                          <Nowplay/>
                        </section>

                        <section >
                          <TopRate/>
                        </section>

                        <section>
                          <Popular/>
                        </section>

                        <section>
                        <Upcoming/>

                        </section>
                    </React.Fragment>
                
              ) 
              }
                                 
      </div> 
  )
}
