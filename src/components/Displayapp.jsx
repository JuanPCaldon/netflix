import React from 'react'
import styles from './App.module.css'

export const Displayapp = () => {
  return (
   
   
    <div className={styles.descripcionPeli}>

          <img src="" alt="logoPeli" />
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus tempus velit eget rutrum.
             Fusce viverra interdum sem, vel tristique neque ultricies ut. Vivamus nec purus sit amet erat tincidunt convallis. </p>

          <div className='displaybotones'>
           <button className={styles.botonesBackgraound}> Reproducir </button>
           <button className={styles.botonesBackgraound}> infomacion </button>
          </div>
        </div>
 

 )
}
