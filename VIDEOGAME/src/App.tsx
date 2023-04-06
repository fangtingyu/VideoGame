import { useState } from 'react'
import GameFilter from './components/GameFilter'
import GameList from './components/GameList'
import GenresFilter from './components/GenresFilter'
import ThemeChange from './components/ThemeChange'
import GameSearchBar from './components/GameSearchBar'
import "bootstrap/dist/css/bootstrap.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <GameSearchBar /> <ThemeChange />
      <GameList />
      <GameFilter />
      <GenresFilter onSelectGenre={(genre) => console.log(genre)} />

    </div>
  )
}

export default App
