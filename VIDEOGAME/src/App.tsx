import { useState } from 'react'
import GameFilter from './components/GameFilter'
import GameList from './components/GameList'
import GenresFilter from './components/GenresFilter'
import ThemeChange from './components/ThemeChange'
import GameSearchBar from './components/GameSearchBar'
import "bootstrap/dist/css/bootstrap.css"
import { Grid, GridItem } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Grid templateAreas={` "nav nav" "aside main"`}
      gridTemplateRows={'50px 1fr 30px'}
      gridTemplateColumns={'150px 1fr'}
      h='200px'
      gap='1'
      color='blackAlpha.700'
      fontWeight='bold'>
      <GridItem bg='coral' area='nav' >
        Nav
      </GridItem>
      <GridItem bg='gold' area='aside' >
        aside
      </GridItem>
      <GridItem bg='dodgerblue' area='main' >
        Nav
      </GridItem>

    </Grid>
    // <div className="App">
    //   <GameSearchBar /> <ThemeChange />
    //   <GameList />
    //   <GameFilter />
    //   <GenresFilter onSelectGenre={(genre) => console.log(genre)} />

    // </div>
  )
}

export default App
