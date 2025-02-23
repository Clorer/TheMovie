import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';

function FilmCapture({ filmAPI }) {
    const [capture, setCapture] = useState(null)
    const getCapt = url => {
        if (!url) return;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setCapture(data)
                // console.log(data)
                // console.log(url)
            })
    }

    useEffect(() => {
        getCapt(filmAPI)
    }, [filmAPI])

    return (
        <div>
            {
                capture ? (
                    <Link className="inline-block min-w-[140px]" to={`/films/${capture.imdbID}`}>
                        <img className='rounded-2xl origin-bottom w-[140px] h-[206px] hover:w-[150px]  hover:h-[221px] transition-all duration-300 ease-in-out hover:cursor-pointer' src={capture.Poster} alt={capture.Title} />
                    </Link>
                )
                    :
                    (<motion.div
                        style={{
                            width: "170px",
                            height: "250px",
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


        </div>
    )
}

export default FilmCapture
