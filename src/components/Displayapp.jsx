import React from 'react'
import styles from './App.module.css'
import { FaPlay } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";
import { AiOutlineSound } from "react-icons/ai";

export const Displayapp = ({description,name,age}) => {

 

  return (
   
         <div className={styles.descripcionPeli}>

          <h1> {name} </h1>
          <p>{description}</p>



          <div className={styles.displaybotones}>
           <button className={styles.botonesBackgraoundR}> <FaPlay/> <strong>Reproducir</strong> </button>
           <button className={styles.botonesBackgraoundI}> <FiInfo/> infomacion </button>
   
          

          <div className={styles.botonesmut}>
              <button className={styles.buttommut}>  
                    <AiOutlineSound color='white' size={27} />
              </button>
              <span> {age}</span>

              </div>

          </div>


         
        </div>
 

 )
}
