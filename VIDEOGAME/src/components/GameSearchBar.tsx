import { SearchIcon } from '@chakra-ui/icons'
import { HStack, IconButton, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSearch } from "react-icons/ai"
import logo from '../assets/logo.webp'
const GameSearchBar = () => {
    return (
        <HStack>
            {/* Bootstrap code for search bar outline */}
            <Image src={logo} boxSize="60px" />
            <IconButton aria-label='Search database' icon={<SearchIcon />} />
            <Text> NavBar</Text>
        </HStack>
    )
}

export default GameSearchBar