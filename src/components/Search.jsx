import React, { useEffect, useState} from 'react'
import styles from "./Search.module.css"
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import { useQuery } from '../hooks/useQuery'


export const Search = () => {

  const [searchText, setsearchText] = useState("");
  const navigate = useNavigate();
  const Query = useQuery();
  const Search = Query.get("search");

  useEffect(() => {
    setsearchText(Search||"");
    
  }, [Search])
  

  const handleSubmit =(event) => {

      event.preventDefault();
      navigate("/?search="+searchText);

  }

   return (
    <form className={styles.SearchContainer} onSubmit={handleSubmit}>
        <div className={styles.searchBox} >
            <input 
              className={styles.searchInput} 
              placeholder='Titulos,personas,generos'
              type="text" value={searchText} 
              onChange={ (e)=> {
                  const value = e.target.value;
                  setsearchText(value) 
                  navigate("/?search="+value);
                  }}/>
              <button className={styles.searchButton} type='submit'> 
               <FaSearch size={18} color='white'/>
              </button>
        </div>

    </form>
  )
}
