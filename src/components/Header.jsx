import { HStack, Stack, Spacer, Box, Button, useColorMode, IconButton, useColorModeValue, Heading } from '@chakra-ui/react'
import React from 'react'
import { Link as Linkto } from 'react-router-dom';
import { AiOutlineUserAdd, AiOutlineUser } from 'react-icons/ai'
import { FaSun, FaMoon } from 'react-icons/fa';

function Header() {

    const { colorMode,toggleColorMode } = useColorMode();
    const isDark = colorMode === "light";

  return (
    <div>
        <HStack w={'100%'} bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
                <Box>
                    <Heading fontSize={'25px'} fontFamily={'Helvetica Neue'} fontWeight='bold' p={6} bgGradient={'linear(to-r, cyan.400, blue.500, purple.600)'} bgClip='text' letterSpacing={2}>Centene Portal</Heading>
                    
                </Box>
                <Spacer></Spacer>
                <Box
                p='4'
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                    <Stack direction={'row'} spacing={6}>
                        <Linkto to={'/'}>Home</Linkto>
                        <Linkto to={'/about'}>About</Linkto>
                        <Linkto to={'/blog'}>Blog</Linkto>
                        <Linkto to={'/contact'}>Contact</Linkto>
                    </Stack>
                    <Linkto to={'/login'}>
                        <Button colorScheme={'blackAlpha.400'} variant={'ghost'} rightIcon={<AiOutlineUser/>}>Login</Button>
                    </Linkto>
                    <Linkto to={'/register'}>
                        <Button bg={'blackAlpha.500'} rightIcon={<AiOutlineUserAdd/>}>Sign up</Button>
                    </Linkto>
                    <IconButton icon={ isDark ? <FaMoon/> : <FaSun/>} isRound='true' onClick={toggleColorMode}></IconButton>
                 
                </Box>
           
        </HStack>
    </div>
  )
}

export default Header