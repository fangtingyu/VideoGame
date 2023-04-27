import { HStack, Stack, Switch, useColorMode, Text } from '@chakra-ui/react';
import React, { useState } from 'react'

function ThemeChange() {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <HStack>
            <Switch colorScheme='teal' size='lg' onChange={toggleColorMode} />
            <Text whiteSpace={'nowrap'}>Dark Mode</Text>
        </HStack>
    )
}

export default ThemeChange