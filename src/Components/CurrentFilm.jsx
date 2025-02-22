import React from 'react'
import FilmCapture from "./FilmCapture";

export default function CurrentFilm({ APIs }) {
    
    return (
        <>
            <p className='mt-17 mb-5 text-xl font-extrabold'>Currently Watching</p>
            <div className="flex gap-3 wraped">
                {APIs && APIs.map((el, index) => (
                        <FilmCapture key={index} filmAPI={el} />
                ))}
            </div>
        </>
    )
}
