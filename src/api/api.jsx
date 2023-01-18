import axios from 'axios'
const apiKey = process.env.API_KEY

export async function fetchDataByTitle(year) {
  const response = await axios.get(
    `https://www.omdbapi.com/?s=comedy&y=${year}&apikey=80d9acec`
  )
  return response.data
}

export async function fetchDataBySearch(search) {
  const response = await axios.get(
    `https://www.omdbapi.com/?s=${search}&apikey=80d9acec`
  )
  return response.data
}

export async function fetchDataById(id) {
  const response = await axios.get(
    `https://www.omdbapi.com/?i=${id}&apikey=80d9acec`
  )
  return response.data
}
