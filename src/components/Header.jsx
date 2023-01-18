import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { searchContext } from '../App'
import { motion } from 'framer-motion'
import MainImg from '../images/2081074.jpg'

const Header = () => {
  const { search, setSearch } = useContext(searchContext)
  const [input, setInput] = useState('')

  useEffect(() => {
    console.log(search)
  }, [search])

  return (
    <section className='w-full black-background'>
      <div class='relative text-center mb-2'>
        <img className='h-[300px] w-full ' src={MainImg} alt='image' />
        <motion.div
          className='absolute top-20 left-32  font-logo text-white text-3xl md:text-4xl lg:text-6xl '
          animate={{ x: -100 }}
          initial={true}
          transition={{ ease: 'easeOut', duration: 1.5 }}
        >
          Movies Info
        </motion.div>
        {/* <div className='absolute top-32 md:top-40 left-6 text-black rounded-md shadow-sm'> */}
        <motion.div
          className='absolute top-32 md:top-40 -left-[72px] text-black rounded-md shadow-sm '
          initial='hidden'
          animate={{ x: 100 }}
          transition={{ ease: 'easeOut', duration: 1.5 }}
        >
          <input
            type='search'
            className='form-input py-2 px-3 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5'
            placeholder='Search'
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type='submit'
            onClick={() => setSearch(input)}
            className='absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out'
          >
            <svg className='h-5 w-5' fill='currentColor' viewBox='0 0 20 20'>
              <path
                fillRule='evenodd'
                d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </motion.div>
        {/* </div> */}
      </div>
    </section>
  )
}

export default Header
