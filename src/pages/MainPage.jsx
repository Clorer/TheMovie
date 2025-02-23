import React from 'react'
import CurrentFilm from '../Components/WatchedFilm'
import Search from '../Components/Seacrh'
import WatchList from '../Components/WatchList'
import SuggestedFilms from '../Components/SuggestedFilms'

export default function MainPage() {


  return (
    <>
      <Search />
      <div className='flex justify-between'>
        <CurrentFilm />
        <WatchList />
      </div>
    <SuggestedFilms />
    </>
  )
}
