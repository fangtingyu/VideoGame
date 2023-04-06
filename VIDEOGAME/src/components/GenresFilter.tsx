import React, { useState } from 'react'
import GenresList from './static/GenresList'


interface Props {
    onSelectGenre: (genre: string) => void;
}

const GenresFilter = ({ onSelectGenre }: Props) => {
    const [selectedIndex, setSelectedIndex] = useState(-1)

    return (
        <div>
            <h1>Genres</h1>
            <ul className='list-group'>
                {/* Create the list */}
                {GenresList.map((genre, index) => <li
                    className={index === selectedIndex ? 'list-group-item active' : 'list-group-item'}
                    key={genre}
                    onClick={() => {
                        setSelectedIndex(index);
                        onSelectGenre(genre);
                    }}>
                    {/* This onClick function made sure the chosen genre has different display to others */}
                    {genre} </li>)}
            </ul>
        </div >
    )
}

export default GenresFilter