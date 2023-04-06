import React from 'react'
import { AiOutlineSearch } from "react-icons/ai"

const GameSearchBar = () => {
    return (
        <>
            {/* Bootstrap code for search bar outline */}
            <div>
                <form className="mb-3 d-flex" role="search">
                    <AiOutlineSearch size={'40px'} color='grey' />
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>

        </>
    )
}

export default GameSearchBar