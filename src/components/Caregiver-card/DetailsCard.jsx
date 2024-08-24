import { Avatar, Box, Flex, Heading, Spacer, Stack, Text } from '@chakra-ui/react'
import React from 'react'


function DetailsCard(props) {

  // console.log(props.uname);

  return (
    <div>
        <Stack>
            <Box borderWidth={2} w='420px' h={'260px'} bg="gray.100" p="8" 
        border={"1px"} borderColor="gray.200" boxShadow='lg' rounded={"md"} mb='12'>
                <Flex>
                    <Heading align={'left'} fontWeight="semi-bold" bgGradient={'linear(to-r, cyan.400, blue.500, purple.600)'} bgClip='text' letterSpacing={2} p='2'>{props.name}</Heading>
                    <Spacer></Spacer>
                    <Avatar 
                    ml={"10"}
                    w={"150px"}
                    h="150px"
                    name="" 
                    size={"xl"}
                    src="https://cdn.iconscout.com/icon/free/png-256/face-1659511-1410033.png"/>
                </Flex>
                
                <Text fontSize={'20px'} color="gray.400"> Id : {props.id}</Text>
                <Text fontSize={'20px'} color="gray.400">Phone :{props.phone}</Text>
                {/* <AssignButton uname={props.uname} cid={props.id} cname={props.name}/> */}
                {/* <Button>Assign{props.id}</Button> */}
            </Box>
            
        </Stack>
    </div>
  )
}

export default DetailsCard