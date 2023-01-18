import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { fetchDataByTitle } from '../api/api'
import DropDrown from './DropDrown'
import { Link } from 'react-router-dom'
import { mainMoviesContext } from '../App'
import { motion } from 'framer-motion'

const TopMovies = () => {
  const { mainMovies } = useContext(mainMoviesContext)
  const [topMovies, setTopMovies] = useState([])

  const fetchYears = async (title) => {
    const res = await fetchDataByTitle(title)
    setTopMovies(res.Search)
  }

  useEffect(() => {
    fetchYears(mainMovies)
  }, [mainMovies])

  return (
    <>
      <div className=' w-10/12  mx-auto mt-5 flex justify-end '>
        <DropDrown />
      </div>

      <motion.div className=' mt-11 w-11/12 mx-auto min-h-[80px] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-start gap-5 pb-16'>
        {topMovies.map((movie, index) => {
          // console.log(movie, movie.Title)
          return (
            <motion.div>
              <div className='mx-auto  rounded-xl overflow-hidden shadow-lg hover:bg-teal-100  bg-teal-200 w-full gap-16 border'>
                <img
                  className='w-full h-[400px]'
                  src={movie.Poster}
                  alt={movie.Title}
                />
                <div className='px-6 py-4 h-[100px] flex justify-center'>
                  <Link
                    to={`/movies/${movie.imdbID}`}
                    className='font-bold text-xl mb-2 font-mehubar '
                  >
                    {movie.Title}
                  </Link>
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </>
  )
}

export default TopMovies
