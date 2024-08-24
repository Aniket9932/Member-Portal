import { Container, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'

function About() {
  return (
    <div>
        <Stack bgImage={'https://img.freepik.com/free-photo/attractive-doctor-intern-isolated-white-background_185193-68971.jpg?w=2000'}
        bgRepeat={'no-repeat'}
        bgPosition={'center'}
        bgSize={'cover'}
        minH='100vh' p={15}>
            <Container w={'400px'} h='350px' borderWidth={2} ml={"700px"} borderRadius='50'>
                <Heading bgGradient={'linear(to-r, cyan.400, blue.500, purple.600)'} bgClip='text' w={'100%'} p='4'>About Us</Heading>
                <Text w={'100%'} p='4' fontSize={'18px'} color='gray.400' fontWeight={'semi-bold'} letterSpacing='1'>
                    Centene is committed to helping people live healthier lives. We provide access to high-quality healthcare, innovative programs and a wide range of health solutions that help families and individuals get well, stay well and be well.
                </Text>
            </Container>
        </Stack>
        
        
    </div>
  )
}

export default About