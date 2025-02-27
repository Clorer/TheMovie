import React from 'react'
import FilmCapture from './FilmCapture'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';
import 'swiper/css';

function WatchList() {
    const [watchlist, setWatchlist] = useState(localStorage.getItem('filmslist') ? JSON.parse(localStorage.getItem('filmslist')).watchlist : [])
    let widthContainer = '';
    
    if (watchlist.length === 2) {
        widthContainer = 'w-80';
    } else if (watchlist.length === 3) {
        widthContainer = 'w-120';
    } else {
        widthContainer = 'w-140';
    }

    return watchlist.length > 0 ? (
        <div className='mr-35 w-[35%]'>
            <p className='mt-17 ml-5 mb-5 text-xl font-extrabold'>Watchlist</p>
            <div className={`${widthContainer} flex items-center`}>
                <button className={`${watchlist.length > 3 ? '' : 'hidden'} swiper-button-prev bg-gray-200 hover:bg-gray-300 hover:py-1.5 hover:px-3.5 hover:cursor-pointer transition-all duration-200 ease-in-out text-white px-3 py-1 rounded-2xl active:bg-gray-400 mr-4`}>⇦</button>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={watchlist.length < 4 ? watchlist.length : 3}
                    loop={true}
                    modules={[Navigation]}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                >

                    {watchlist.map((film, index) =>
                        <SwiperSlide>
                            <FilmCapture key={index} filmAPI={film} />
                        </SwiperSlide>)}
                </Swiper>
                <button className={`${watchlist.length > 3 ? '' : 'hidden'} swiper-button-next bg-gray-200 hover:bg-gray-300 hover:py-1.5 hover:px-3.5 hover:cursor-pointer transition-all duration-200 ease-in-out text-white px-3 py-1 rounded-2xl active:bg-gray-400`}>⇨</button>
            </div>
        </div>

    ) : null;
}

export default WatchList