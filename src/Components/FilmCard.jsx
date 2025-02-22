import React from 'react'
import { motion } from "framer-motion" 

export default function FilmCard({ filmInfo }) {
    return filmInfo ? (
        <div className='mt-5 flex w-[45%]'>
            <img className='w-[180px] min-w-[200px] max-h-[300px] rounded-2xl' src={filmInfo.Poster} alt={filmInfo.Title} />
            <div className='mt-5 mb-5 ml-3 flex flex-col justify-between'>
                <div  className='flex flex-col'>
                    <div className='flex gap-2 flex-wrap'>
                        {filmInfo.Genre && filmInfo.Genre.split(', ').map((el, index) => (
                            <p key={index} className='font-semibold border rounded-2xl px-3 py-1 text-sm bg-gray-100'>
                                {el}
                            </p>
                        ))}
                    </div>
                    <p className='font-semibold mt-3 mb-3'>{filmInfo.Plot}</p>
                </div>
                    <p className='font-semibold'>IMDB Rating: <br/> ⭐{filmInfo.imdbRating}<span className='text-gray-500'>/10</span></p>
            </div>
        </div>
    ) : (<motion.div
        style={{
            width: "500px",
            height: "300px",
            borderRadius: '1rem',
            background: "linear-gradient(45deg,rgb(156, 154, 154),rgb(214, 214, 214))",
        }}
        animate={{
            background: [
                "linear-gradient(45deg,rgb(165, 162, 162),rgb(235, 235, 235))",
                "linear-gradient(45deg,rgb(104, 104, 104),rgb(158, 158, 158))",
                "linear-gradient(45deg,rgb(58, 58, 58),rgb(151, 151, 151))",
            ],
        }}
        transition={{
            duration: 0.3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
        }}
    >
    </motion.div>);
}
