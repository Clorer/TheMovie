import React, { useContext } from 'react'
import FilmCapture from "./FilmCapture";
import { useContextFilmsList } from '../context';

export default function CurrentFilm() {
    const APIs = useContextFilmsList().watched;
    const isWatchlist = APIs.slice(APIs.length - 3, APIs.length);
    return isWatchlist.length > 0 ? (
        <div>
            <p className='mt-17 mb-5 text-xl font-extrabold'>Watched</p>
            <div className="flex gap-3 wraped">
                {isWatchlist && isWatchlist.map((el, index) => (
                        <FilmCapture key={index} filmAPI={el} />
                ))}
            </div>
        </div>
    ) : null;
}
