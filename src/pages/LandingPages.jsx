import React from 'react'

import { Nowplay } from '../components/Nowplay'
import { TopRate } from '../components/TopRate'


export const LandingPages = () => {

  // console.log(movies)
  return (
      <div>
        <section>
             <Nowplay/>
        </section>
        <section>
            <TopRate/>
        </section>

      </div>
       
       // <CaruselImg /> 
  
   
  )
}
