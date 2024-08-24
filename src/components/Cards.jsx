import { Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

function Cards(props) {
  return (
    
      
            <Stack w={'350px'} h='240px' borderColor='gray.300' borderRadius={20}>
                <Image src={props.src} w={'100%'} h='70%' borderTopRadius={20}></Image>
                <Text textAlign={'center'} p='1' textDecoration={'underline'} fontSize='lg'><a href={props.link}>{props.text}</a></Text>
            </Stack>
        
    
  )
}

export default Cards