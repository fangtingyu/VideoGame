import React, { useState } from 'react'
import GenresList from './static/GenresList'
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
} from '@chakra-ui/react'

interface Props {
    onSelectGenre: (genre: string) => void;
}

const GenresFilter = ({ onSelectGenre }: Props) => {
    const [selectedIndex, setSelectedIndex] = useState(-1)

    return (
        <div>
            <h1>Genres</h1>
            <UnorderedList className='list-group'>
                {/* Create the list */}
                {GenresList.map((genre, index) => <ListItem
                    className={index === selectedIndex ? 'list-group-item active' : 'list-group-item'}
                    key={genre}
                    onClick={() => {
                        setSelectedIndex(index);
                        onSelectGenre(genre);
                    }}>
                    {/* This onClick function made sure the chosen genre has different display to others */}
                    {genre} </ListItem>)}
            </UnorderedList>
        </div >
    )
}

export default GenresFilter