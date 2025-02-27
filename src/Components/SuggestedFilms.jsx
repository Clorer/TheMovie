import React, { useContext } from 'react';
import FilmCapture from './FilmCapture';
import { filmsListContext } from '../context';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from'swiper/modules';
import 'swiper/css';

function SuggestedFilms() {

  const suggestedFilms = useContext(filmsListContext).suggest;

  return suggestedFilms.length > 0 ? (
    <div>
      <h2 className="mt-5 ml-5 mb-5 text-xl font-extrabold">Suggested Films</h2>
      <Swiper 
      spaceBetween={10}
      slidesPerView={3}
      loop={true}
      modules={[Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 4,
          spaceBetween: 10
        },
        800: {
          slidesPerView: 5,
          spaceBetween: 10
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 10
        },
        1240: {
          slidesPerView: 7,
          spaceBetween: 10
        },
        1480: {
          slidesPerView: 8,
          spaceBetween: 10
        },
        1600: {
          slidesPerView: 9,
          spaceBetween: 10
        },
        }}>
          {suggestedFilms.map((film) => (
            <SwiperSlide><FilmCapture key={film} filmAPI={`http://www.omdbapi.com/?i=${film}&apikey=d3d7f8c0`} /></SwiperSlide>
        ))}
        </Swiper>
        
    </div>
  ) : null;
}

export default SuggestedFilms;
