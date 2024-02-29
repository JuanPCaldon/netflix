
import {FaSpinner} from 'react-icons/fa';
import React from 'react'
import Styles from './Spinner.module.css';

export const Spiner = () => {
  return (
    <div className={Styles.Spinner}>
        <FaSpinner className={Styles.Spinning} size={60}/>
    </div>
  )
}
