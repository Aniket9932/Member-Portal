import React from 'react'
import { Box, Heading, Stack, Text,chakra, Button } from '@chakra-ui/react'
import { HiOutlineMail } from 'react-icons/hi'

function Contact() {
  return (
    <div>
        <Stack bgImage={'https://img.freepik.com/premium-photo/concept-contact-us-blank-wooden-cubes-square-dice-with-symbol-email-telephone-address-placed-wood-background_44868-1254.jpg?w=2000'}
        bgRepeat={'no-repeat'}
        bgPosition={'center'}
        bgSize={'cover'}
        minH='100vh' p={15} >
            <Box pl={6} pt='6'>
                <Box p={8} borderWidth={2} borderColor='gray.400' mt='3' w={'35%'} borderRadius='50'>
                <Heading bgGradient={'linear(to-r, cyan.400, blue.500, purple.600)'} bgClip='text' w={'100%'}>Contact Us</Heading>
                
                    <Text fontWeight={'bold'} fontSize={'18px'} color='teal' letterSpacing={1} mt='6'> Address </Text>
                    <Text w={'100%'} p='4' fontSize={'lg'} color='gray.500' fontWeight={'semi-bold'} letterSpacing='1' mt={3}>
                    Street:  7, Shivaji Park,sea Fac, Amarkunj, Na, Dadar(w)<chakra.br/>

                    City:   Mumbai<chakra.br/>

                    State/province/area:    Maharashtra<chakra.br/>

                    Phone number  02224463831<chakra.br/>

                    Zip code  400028<chakra.br/>

                    Country calling code  +91 <chakra.br/>

                    Country  India<chakra.br/>
                    </Text>
                    <a href='mailto:centene.com'>
                        <Button colorScheme={'pink'} mt="5" rightIcon={<HiOutlineMail/>}>Email Us</Button>
                    </a>
                </Box>
            </Box>
        </Stack>
    </div>
  )
}

export default Contact