import React from 'react'
import CurrentFilm from '../Components/CurrentFilm'
import Search from '../Components/Seacrh'
import { useState, useEffect } from 'react';

export default function MainPage() {


  return (
    <>
      <Search />
      <CurrentFilm APIs={''} />
    </>
  )
}
