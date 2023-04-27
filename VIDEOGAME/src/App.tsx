import { useState } from 'react'
import GameGrid from './components/GameGrid'
import GameSearchBar from './components/GameSearchBar'
import "bootstrap/dist/css/bootstrap.css"
import { Grid, GridItem, HStack as Flex, Show, HStack } from '@chakra-ui/react'
import GenreList from './components/GenreList'
import { Genre } from './hooks/useData'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './hooks/useGames'
import SortSelector from './components/SortSelector'
import SearchInput from './components/SearchInput'
import ThemeChange from './components/ThemeChange'

//  This interface aims to combine the two filter together as a GameQuery instead of two selector, they still work at the same way but as one object
export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
    sortOrder: string;
    searchText: string;
}

const App = () => {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)
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
                <HStack padding='10px'>
                    <GameSearchBar />
                    <SearchInput onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} />
                    <ThemeChange />
                </HStack>
            </GridItem>
            <Show above="lg">
                <GridItem area='aside' paddingX='5px'>
                    <GenreList onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} selectedGenre={gameQuery.genre} />
                    {/* For setting and updating an object -> {...object, attribute} */}
                </GridItem>
            </Show>
            <GridItem area='main' >
                <Flex spacing={5} paddingLeft={2} marginBottom={5}>
                    <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} />
                    <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} />
                </Flex>
                <GameGrid gameQuery={gameQuery} />
            </GridItem>
        </Grid>
    )
}

export default App