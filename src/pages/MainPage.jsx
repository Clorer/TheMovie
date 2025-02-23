import React from 'react'
import CurrentFilm from '../Components/CurrentFilm'
import Search from '../Components/Seacrh'
import WatchList from '../Components/WatchList'

export default function MainPage() {


  return (
    <>
      <Search />
      <div className='flex justify-between'>
        <CurrentFilm />
        <WatchList />
      </div>
    </>
  )
}
