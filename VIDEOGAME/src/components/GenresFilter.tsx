import React from 'react'
import GenresList from './GenresList'

const GenresFilter = () => {
    return (
        <div>
            <ul className='list-group'>
                {/* Create the list */}
                {GenresList.map(genre => <li className='list-group-item' key={genre} value={genre}> {genre} </li>)}
            </ul>
        </div>
    )
}

export default GenresFilter