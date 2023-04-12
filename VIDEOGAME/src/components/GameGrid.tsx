import React, { useEffect, useState } from 'react'
import { CardHeader, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Button, Text } from '@chakra-ui/react'
import apiClient from '../services/api-client';


interface Game {
    id: number;
    name: string;
}


interface FetchGamesResponse {
    count: number;
    results: Game[];
}

const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        apiClient.get('/games')
            .then(res => setGames(res.data.results))
            .catch(err => setError(err.message))
    })


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