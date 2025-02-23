import React from 'react'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Trailer({filmTitle}) {
    const YOUTUBE_API_KEY = 'AIzaSyCB7pZOUa5ARmuM-99b1XE5VSsOip05Fqk'
    const [trailerUrl, setTrailerUrl] = useState(null)

    const getTrailer = async() => {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(filmTitle.Title + " official trailer")}&key=${YOUTUBE_API_KEY}&maxResults=1&type=video`);
        const data = await response.json();
        setTrailerUrl(data.items[0].id.videoId);
    }

    useEffect(() => {
        filmTitle && getTrailer();
    }, [filmTitle])

  return trailerUrl ? (
        <iframe
            className="rounded-lg mt-5 w-[35%] min-w-[500px] h-[300px] shadow-lg cursor-pointer hover:shadow-xl"
            src={`https://www.youtube.com/embed/${trailerUrl}`}
            title="Movie Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
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
</motion.div>)
}
