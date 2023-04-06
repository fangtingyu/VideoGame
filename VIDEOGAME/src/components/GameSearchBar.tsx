import { SearchIcon } from '@chakra-ui/icons'
import { IconButton, Textarea } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSearch } from "react-icons/ai"

const GameSearchBar = () => {
    return (
        <>
            {/* Bootstrap code for search bar outline */}
            <IconButton aria-label='Search database' icon={<SearchIcon />} />
        </>
    )
}

export default GameSearchBar