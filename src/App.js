import './App.css'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Recipes from './components/Recipes'
import axios from 'axios'

function App() {
  const [recipes, setRecipes] = useState([])
  const [filter, setFilter] = useState('')

  const API_KEY = process.env.REACT_APP_API_KEY
  const API_ID = process.env.REACT_APP_API_ID

  const URL = `https://api.edamam.com/search?q=${filter}&app_id=${API_ID}&app_key=${API_KEY}&diet=balanced`

  useEffect(() => {
    const fetchRecipes = async () => {
      const res = await axios.get(URL)
      const data = res.data

      console.log(data.hits)
      setRecipes(data.hits)
    }

    fetchRecipes()
  }, [URL])

  const filterRecipes = async (filterValue) => {
    console.log(filterValue)
    setFilter(Object.values(filterValue))
    console.log(filter)
  }

  return (
    <div className='app'>
      <Header onFilter={filterRecipes} />
      <Recipes recipes={recipes} />
      <Footer />
    </div>
  )
}

export default App
