import React from 'react'
import {
    Box,
    Flex,
    Avatar,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Image,
    Center,
    chakra,
    Heading,
    HStack,
    Spacer,
    Text,
    Img,
    Container,
    IconButton
  } from '@chakra-ui/react';
  // import { MoonIcon, SunIcon } from '@chakra-ui/icons';
  import { useLocation, Link as Linkto } from 'react-router-dom'
  import { FaSun, FaMoon } from 'react-icons/fa';
  

function Dashboardheader() {

  const location = useLocation(); 

  const state = location?.state || {};
      const username = state?.username || "Username";

      const { colorMode,toggleColorMode } = useColorMode();
      const isDark = colorMode === "light";

  return (
    <div>
        <HStack p={6}>
        <Heading fontSize={'25px'} fontFamily={'Helvetica Neue'} fontWeight='bold'  bgGradient={'linear(to-r, cyan.400, blue.500, purple.600)'} bgClip='text' letterSpacing={2}>Centene Portal</Heading>
              <Spacer></Spacer>
              <IconButton icon={ isDark ? <FaMoon/> : <FaSun/>} isRound='true' onClick={toggleColorMode}></IconButton>
              <Menu>
                  <MenuButton
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}
                    >
                    <Avatar
                      size={'sm'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </MenuButton>
                  <MenuList alignItems={'center'}>
                    <br />
                    <Center>
                      <Avatar
                        size={'2xl'}
                        src={'https://avatars.dicebear.com/api/male/username.svg'}
                      />
                    </Center>
                    <br />
                    <Center>
                      <chakra.p>{username}</chakra.p>
                    </Center>
                    <br />
                    <MenuDivider />
                    <Linkto to={"/"}><MenuItem>Home</MenuItem></Linkto>
                    <Linkto to={"/dashboard/caregiver"}><MenuItem>Caregiver</MenuItem></Linkto>
                    <Linkto to={"/login"}><MenuItem>Logout</MenuItem></Linkto>
                  </MenuList>
                </Menu>
                
          </HStack>
    </div>
  )
}

export default Dashboardheader