import { Button, DarkMode, HStack, LightMode, Stack, Switch, useColorMode } from '@chakra-ui/react';
import React, { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

function ThemeChange() {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Stack direction='row'>
            <Switch colorScheme='teal' size='lg' onChange={toggleColorMode} />
        </Stack>
    )
}

export default ThemeChange