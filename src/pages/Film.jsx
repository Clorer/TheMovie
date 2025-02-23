import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion';
import { filmsListContext } from '../context';
import FilmCard from '../Components/FilmCard';
import Trailer from '../Components/Trailer';
import Search from '../Components/Seacrh'

export default function Film() {
  const [filmInfo, setFilmInfo] = useState(null);
  const [isWatchlist, setIsWatchlist] = useState(false);
  const filmsList = useContext(filmsListContext);
  const params = useParams();
  const url = `http://www.omdbapi.com/?i=${params.filmId}&apikey=d3d7f8c0`;


  const addToWatchlist = () => {
    setIsWatchlist((prev) => !prev)
    if (!filmsList.watchlist.includes(url)) {
      filmsList.watchlist.push(url);
    } else {
      filmsList.watchlist.splice(filmsList.watchlist.indexOf(url), 1);
    }
  }

  const getInfo = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setFilmInfo(data);
  }

  useEffect(() => {
    getInfo(url);
    if (filmsList.watchlist.includes(url) && !isWatchlist) {
      setIsWatchlist(true);
    } else if (!filmsList.watchlist.includes(url) && isWatchlist) {
      setIsWatchlist(false);
    }}, [url])

  return (
    <>
      <Search />
      <div className=' flex justify-between mt-17'>
        {filmInfo && <p className='text-3xl font-extrabold '>{filmInfo.Title}</p>}
        <motion.button
          className='bg-gray-200 rounded-3xl px-5 font-semibold flex items-center gap-2 hover:cursor-pointer'
          onClick={() => addToWatchlist()}
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 1.05 }}
        >
          {/* Анимируем SVG */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className='h-6 w-6 inline-block'
            initial={{ scale: 0.8, rotate: 0 }}
            animate={{ scale: 1.0, rotate: isWatchlist ? 360 : 0 }}
            transition={{ type: 'spring', stiffness: 90, damping: 10 }}
            fill={isWatchlist ? 'red' : 'none'}
            stroke={isWatchlist ? 'red' : 'currentColor'}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 3v18l7-5 7 5V3z" />
          </motion.svg>

          <p>{isWatchlist ? 'Added to watchlist' : 'Add to watchlist'}</p>
        </motion.button>
      </div>
      <div className='flex justify-between'>
        <FilmCard filmInfo={filmInfo} />
        <Trailer filmTitle={filmInfo} />
      </div>
    </>
  )
}
