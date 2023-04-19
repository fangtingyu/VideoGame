import { useState } from 'react'
import GameGrid from './components/GameGrid'
import GameSearchBar from './components/GameSearchBar'
import "bootstrap/dist/css/bootstrap.css"
import { Grid, GridItem, Show } from '@chakra-ui/react'
import GenreList from './components/GenreList'

const App = () => {
    const [count, setCount] = useState(0)

    return (
        <Grid templateAreas={{
            base: ` "nav" "main" `,
            lg: ` "nav nav" "aside main" ` // large devices are devices that larger than 1240px
        }}
            templateColumns={{
                base: '1fr',
                lg: '200px 1fr'
            }}
        >
            <GridItem area='nav'>
                <GameSearchBar />
            </GridItem>
            <Show above="lg">
                <GridItem area='aside' paddingX='5px'>
                    <GenreList />
                </GridItem>
            </Show>
            <GridItem area='main' >
                <GameGrid />
            </GridItem>
        </Grid>
    )
}

export default App