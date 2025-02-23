import React, { useContext } from 'react';
import FilmCapture from './FilmCapture';
import { filmsListContext } from '../context';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function SuggestedFilms() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10, // 3 фильма одновременно
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Сделал 3 секунды
  };

  const suggestedFilms = useContext(filmsListContext).suggest;

  return suggestedFilms.length > 0 ? (
    <div>
      <h2 className="mt-5 ml-5 mb-5 text-xl font-extrabold">Suggested Films</h2>
      <Slider {...settings}>
        {suggestedFilms.map((film) => (
          <div key={film}> {/* Каждый фильм — отдельный слайд */}
            <FilmCapture filmAPI={`http://www.omdbapi.com/?i=${film}&apikey=d3d7f8c0`} />
          </div>
        ))}
      </Slider>
    </div>
  ) : null;
}

export default SuggestedFilms;
