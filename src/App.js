import { useState, useEffect, createContext } from 'react'

import './App.css'
import Pages from './pages/Pages'

export const mainMoviesContext = createContext({})
export const searchContext = createContext({})

function App() {
  const [mainMovies, setMainMovies] = useState('2016')
  const [search, setSearch] = useState('')
  // console.log(mainMovies)
  return (
    <div className='black-background '>
      <mainMoviesContext.Provider value={{ mainMovies, setMainMovies }}>
        <searchContext.Provider value={{ search, setSearch }}>
          <Pages />
        </searchContext.Provider>
      </mainMoviesContext.Provider>
    </div>
  )
}

export default App
