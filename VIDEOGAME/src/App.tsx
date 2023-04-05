import { useState } from 'react'
import GameFilter from './components/GameFilter'
import GameList from './components/GameList'
import GenresFilter from './components/GenresFilter'
import ThemeChange from './components/ThemeChange'
import "bootstrap/dist/css/bootstrap.css"

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <GenresFilter />

    </div>
  )
}

export default App
