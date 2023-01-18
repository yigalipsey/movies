import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { fetchDataBySearch } from '../api/api'
import { Link } from 'react-router-dom'
import { searchContext } from '../App'

const SearchMovie = () => {
  const { search, setSearch } = useContext(searchContext)
  const [movies, setMovies] = useState([])

  const fetchMovies = async (search) => {
    const res = await fetchDataBySearch(search)
    setMovies(res.Search)
  }

  useEffect(() => {
    fetchMovies(search)
  }, [search])

  return (
    <>
      <div className=' mt-11 w-11/12 mx-auto min-h-[80px] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-start gap-5 pb-16'>
        {movies.map((movie, index) => {
          // console.log(movie, movie.Title)
          return (
            <div className='mx-auto  rounded-xl overflow-hidden shadow-lg hover:bg-teal-100  bg-teal-200 w-full gap-16 border'>
              <img
                className='w-full h-[400px]'
                src={movie.Poster}
                alt={movie.Title}
              />
              <div className='px-6 py-4 h-[100px] flex justify-center'>
                <Link
                  to={`/movies/${movie.imdbID}`}
                  className='font-bold text-xl mb-2 font-mehubar'
                >
                  {movie.Title}
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default SearchMovie
