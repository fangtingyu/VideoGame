import { useState } from 'react'
import GameFilter from './components/GameFilter'
import GameList from './components/GameList'
import GenresFilter from './components/GenresFilter'
import ThemeChange from './components/ThemeChange'
import GameSearchBar from './components/GameSearchBar'
import "bootstrap/dist/css/bootstrap.css"
import { Grid, GridItem, Show } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Grid templateAreas={{
      base: ` "nav" "main" `,
      lg: ` "nav nav" "aside main" ` // large devices are devices that larger than 1240px
    }}>
      <GridItem area='nav'>
        <GameSearchBar />
      </GridItem>
      <Show above="lg">
        <GridItem area='aside' bg='gold' >
          Aside
        </GridItem>
      </Show>
      <GridItem area='main' bg='dodgerblue' >
        Main
      </GridItem>
    </Grid>
    // <div className="App">
    //   <GameSearchBar /> 
    //   <GameList />
    //   <GameFilter />
    //   <GenresFilter onSelectGenre={(genre) => console.log(genre)} />

    // </div>
  )
}

export default App
