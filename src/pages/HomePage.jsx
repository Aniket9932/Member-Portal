import { Box, Button, Container, VStack, ButtonGroup, Heading,Text, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineArrowRight, AiOutlineUser } from 'react-icons/ai'
import { Link as Linkto } from 'react-router-dom'

function HomePage() {

  const { colorMode } = useColorMode();
  const isDark = colorMode === "light";

  return (
    <div>
      <VStack w={'100%'}>
        <Box w={'100%'} >
          <Container centerContent position={'absolute'} mt={'12'} ml={14} w="800px" h={'500px'}>
            <Heading fontSize={'4xl'} fontWeight="bold" bgGradient={'linear(to-r, cyan.400, blue.500, purple.600)'} bgClip='text' letterSpacing={2} p='4'>Welcome To <br></br> Centene Member Portal</Heading>
            <Text mt={3} mb={5} ml='7' fontWeight={'semi-bold'} w='610px' p={3} color={ isDark ? 'blackAlpha.600' : 'gray.500'} fontSize='xl' letterSpacing={1} borderWidth='2px'>
              At Centene, healthcare is personal. As a managed care organization, we invest in communities and support the health of families and individuals.</Text>
            <ButtonGroup gap='5' mt={4}>
              <Linkto to={'/register'}>
                <Button colorScheme='teal' size={'lg'} rightIcon={<AiOutlineArrowRight/>} p='3' iconSpacing={'2'}>Become a Member</Button>
              </Linkto>
              <Linkto to={'/login'}>
                <Button colorScheme='blackAlpha' size={'lg'} rightIcon={<AiOutlineUser/>}>Login</Button>
              </Linkto>
              
            </ButtonGroup>
          </Container>
          <Box
              display='flex'
              alignItems='center'
              justifyContent='center'
              width='100%'
              height={'600px'}
              py={10}
              bgImage="url('https://img.freepik.com/premium-photo/medical-doctor-workspace-concept-with-medical-equipment-color-background_44344-1492.jpg?w=2000')"
              bgSize={'cover'}
              bgPosition='center'
              minH='100vh'
          >
            
          </Box>
          
        </Box>
        
        
      </VStack>
    </div>
  )
}

export default HomePage