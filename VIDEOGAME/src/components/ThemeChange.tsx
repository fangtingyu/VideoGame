import { Stack, Switch } from '@chakra-ui/react';
import React, { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

interface Props {
    onClick: () => void;
}

const ThemeChange = ({ onClick }: Props) => {
    const [darkTheme, setDarkTheme] = useState(false)
    const toggle = () => {
        setDarkTheme(!darkTheme);
        onClick();
    }

    return (
        <Stack direction='row'>
            <Switch colorScheme='teal' size='lg' />
        </Stack>
    )
}

export default ThemeChange