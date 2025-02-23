import React from 'react'
import { useContext } from 'react';
import { filmsListContext } from '../context';
import FilmCapture from './FilmCapture'

function WatchList() {
    const watchlist = useContext(filmsListContext).watchlist;
    return watchlist.length > 0 ? (
        <div className='mr-35 w-[35%]'>
            <p className='mt-17 mb-5 text-xl font-extrabold'>Watchlist</p>
            <div className='flex gap-3 items-center h-64'>
                    {watchlist.map((film, index) => <FilmCapture key={index} filmAPI={film} />)}
            </div>
        </div>
    ) : null;
}

export default WatchList