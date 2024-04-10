import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Navbar.module.css"
import { Search } from './Search'
import { MdOutlineNotifications } from "react-icons/md"


export const Navbar = () => {
  return (
   
      <div className={styles.navbar}>    
       
       
        <ul className={styles.ul}>
            <Link  to="/"> <img className={styles.netflix} src="./NetflixLogo.png" alt="logo" />    </Link> 
            <li className={styles.li}><Link className={styles.color} to="/"> Inicio  </Link></li>
            <li className={styles.li}><Link className={styles.color} to="/series">Series </Link></li>
            <li className={styles.li}><Link className={styles.color} to="/peliculas">Peliculas </Link></li>
            <li className={styles.li}><Link className={styles.color} to="/novedades">Novedades populares </Link></li> 
            <li className={styles.li}><Link className={styles.color} to="/milista"> Mi lista </Link></li> 
            <li className={styles.li}><Link className={styles.color} to="/explorar"> Explorar idiomas</Link> </li>     
            
        </ul>
        <div className={styles.secondary}>

            <div className={styles.secondnavbar}> <Search/> </div>  
            <div className={styles.secondnavbar}>  <MdOutlineNotifications size={25} />  </div>
            <div className={styles.secondnavbar}></div>

        </div>

      </div>
    
  )
}

