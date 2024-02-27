import React from 'react'
import { MoviesGrid } from '../components/MoviesGrid'

export const LandingPages = ({movies}) => {

  // console.log(movies)
  return (
    <MoviesGrid movies={movies} />
  )
}
