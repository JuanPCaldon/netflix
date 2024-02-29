import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Navbar.module.css"


export const Navbar = () => {
  return (
   
      <div className={styles.navbar}>    
       
        <Link  to="/"> <img className={styles.netflix} src="./NetflixLogo.png" alt="logo" />    </Link> 
        <ul className={styles.ul}>
            <li className={styles.li}><Link className={styles.color} to="/"> Inicio  </Link></li>
            <li className={styles.li}><Link className={styles.color} to="/series">Series </Link></li>
            <li className={styles.li}><Link className={styles.color} to="/peliculas">Peliculas </Link></li>
            <li className={styles.li}><Link className={styles.color} to="/novedades">Novedades populares </Link></li> 
            <li className={styles.li}><Link className={styles.color} to="/milista"> Mi lista </Link></li> 
            <li className={styles.li}><Link className={styles.color} to="/explorar"> Explorar idiomas</Link> </li>     
            
        </ul>
        <div className={styles.secondary}>

            <div className={styles.secondnavbar}> Search  </div>  
            <div className={styles.secondnavbar}>  alert  </div>
            <div className={styles.secondnavbar}> butonhambur</div>

        </div>

      </div>
    
  )
}

