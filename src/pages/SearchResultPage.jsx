import React from 'react'
import Search from '../Components/Seacrh'
import { useParams } from 'react-router-dom';
import FilmCapture from '../Components/FilmCapture';
import { useState, useEffect } from 'react';

function SearchResultPage() {
    const title = encodeURIComponent(useParams().searchTerm);
    const [filmsAPIs, setFilmsAPIs] = useState([]);
    const url = `http://www.omdbapi.com/?s=${title}&apikey=d3d7f8c0` 

    const fetchUrl = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (!data.Search || data.Search.length === 0) setFilmsAPIs([]);
            getAPIs(data.Search); 
        } catch (e) {
            console.error('Error: ', e) 
        }
    }

    const getAPIs = data => {
        const newData = data.map(el => `http://www.omdbapi.com/?i=${el.imdbID}&apikey=d3d7f8c0`)
        setFilmsAPIs(newData.slice(0, 6))
    }
    

    useEffect(() => {
        fetchUrl(url); 
    }, [filmsAPIs])

    return (
        <>
            <Search />
            <div className='flex mt-17 gap-3 justify-center items-center h-64'>
                {filmsAPIs.length > 0 ? (
                    filmsAPIs.map(api => <FilmCapture key={api} filmAPI={api} />)
                ) : (
                    <p className="text-2xl font-bold text-gray-500 italic animate-pulse">
                        No films found 😢
                    </p>
                )}
            </div>
        </>
    )
}

export default SearchResultPage