import React from 'react'
import Styles from './LoginPage.module.css'
import { Link } from 'react-router-dom'

export const LoginPage = () => {
  return (


    <div className={Styles.bag}>
            <img className={Styles.logonetflix} src="./NetflixLogo.png" alt="logo" />         
            <main className={Styles.hero}>
                <form action="" className={Styles.grid}>
                    <h1>Iniciar Sesion </h1>
                    <input type="text" placeholder="Email o numero de telefono"/>
                    <input type="password" placeholder='Contraseña'/>
                    <button className={Styles.buttonLogin}><Link to="/Landing"> Iniciar sesion </Link></button>
                    <div className={Styles.checkbox}>
                        <span>O</span>
                        <button className={Styles.buttonLogin2}>Usar un codigo de inicio de sesion</button>
                        <span>¿Olvidaste contraseña?</span>
                       
                    </div>
                    <div className={Styles.check} >
                      <input type="checkbox" />

                      <p className={Styles.textchek}>Recuerdame</p>
  
                    </div>
                    
                    <p>¿Primera vez en Netflix? <a href=""> <strong> Suscríbete ahora. </strong></a> </p>

                    <p>Esta página está protegida por Google reCAPTCHA 
                      para comprobar que no eres un robot.<p className={Styles.masinfo}>Más info. </p></p>

                </form>


            </main>


                <footer >
                  
                    <div className={Styles.flexfooter}>
                      <p className={Styles.llama}>¿Preguntas? Llama al <a href="">01 800 917 1564  </a> </p>
                      <a href="">Preguntas frecuentes</a>
                      <a href="">Centro de ayuda</a>
                      <a href="">Términos de uso</a>
                      <a href="">Privacidad</a>
                      <a href="">Preferencias de cookies</a>
                      <a href="">Información corporativa </a>

                      <div className={`dropdown+ ${Styles.Español}`}>
                          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            Español
                          </button>
                          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Ingles</a>
                          
                       </div>
                      </div>
                   
                    </div>

                   

                </footer>



    </div>
  )
}
