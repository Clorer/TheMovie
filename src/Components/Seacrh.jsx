import { motion } from 'framer-motion';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from'react-router-dom';

function Search() {
const [searchValue, setSearchValue] = useState('');
const navigate = useNavigate();

const handleSearch = (e) => {
  if (e.key === 'Enter') {
    console.log('Search movie:', searchValue);
    setSearchValue('');
    navigate(`/${encodeURIComponent(searchValue)}`, { replace: true });
 }
}

  return (
    <>
      <Link to='/'><p className="absolute font-extrabold text-3xl">The<br />Movie<br />Tracker</p></Link>
      
      <div className="flex pt-5">
        <motion.input
         whileHover={{scale: 1.1}}
         value={searchValue}
         onChange={(e) => setSearchValue(e.target.value)}
         onKeyDown={handleSearch}
         className="rounded-3xl bg-gray-200 text-center p-1 my-0 mx-auto w-100 text-lg" placeholder="Search a movie" />
      </div>
    </>
  )
}

export default Search
