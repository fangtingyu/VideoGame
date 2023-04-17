import React, { useEffect, useState } from 'react'
import { CardHeader, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Button, Text } from '@chakra-ui/react'
import apiClient from '../services/api-client';
import useGames from '../hooks/useGames';



const GameGrid = () => {
    const { games, error } = useGames();
    return (
        <>
            {error && <Text> {error} </Text>}
            <ul>
                {games.map(game => <li key={game.id}>
                    {game.name}
                </li>)}
            </ul>
        </>


    )
}

export default GameGrid