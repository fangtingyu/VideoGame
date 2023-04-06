import React from 'react'
import { IconConp } from 'react-icons';
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Button } from '@chakra-ui/react'
interface Game {
    imageURL: string;
    dataAdded: Date;
    platform: string;
    name: string;
    releaseDate: Date;
    genre: string;
    popularity: number;
    averageRating: number;
}

const GameList = () => {
    return (
        <Card maxW='sm'>
            <CardBody>
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>Living room Sofa</Heading>
                    <p>
                        This sofa is perfect for modern tropical spaces, baroque inspired
                        spaces, earthy toned spaces and for people who love a chic design with a
                        sprinkle of vintage design.
                    </p>
                    <p color='blue.600' font-size='2xl'>
                        $450
                    </p>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'>
                        Buy now
                    </Button>
                    <Button variant='ghost' colorScheme='blue'>
                        Add to cart
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}

export default GameList