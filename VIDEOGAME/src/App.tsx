import { useState } from 'react'
import GameGrid from './components/GameGrid'
import GameSearchBar from './components/GameSearchBar'
import "bootstrap/dist/css/bootstrap.css"
import { Grid, GridItem, Show } from '@chakra-ui/react'
import GenreList from './components/GenreList'
import { Genre } from './hooks/useData'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './hooks/useGames'

const App = () => {
    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
    const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)

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
                    <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)} />
                </GridItem>
            </Show>
            <GridItem area='main' >
                <PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={(platform) => setSelectedPlatform(platform)} />
                <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} />
            </GridItem>
        </Grid>
    )
}

export default App