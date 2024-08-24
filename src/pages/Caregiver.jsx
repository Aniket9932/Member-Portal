import React, { useState,useEffect } from 'react'
import axios from "axios";
import CaregiverCard from '../components/Caregiver-card/CaregiverCard';
import { Box, Flex, Stack,  Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer, } from '@chakra-ui/react';



function Caregiver() {

    const [ myData, setMyData ] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:2000/auth/caregivers")
        .then((res) => setMyData(res.data)
        );
    }, [])
    

  return (
    <div>
        <Stack w={'100%'} bgGradient={'linear(to-r, cyan.400, blue.500, purple.600)'}>
            <Flex wrap={'wrap'} justify='space-evenly' p={8} columnGap='20px' w={'100%'} borderWidth='2' minH={'100vh'}>
            {/* <TableContainer maxW={'100%'} display='block' overflowX={'auto'} overflowY={'hidden'} whiteSpace='nowrap'> */}
            <Box w={'100%'}>
                <Table variant='striped' colorScheme='gray' size={'lg'}>
                    <TableCaption>Centene Caregiver List</TableCaption>
                    <Thead>
                    <Tr>
                        <Th>Caregiver Id</Th>
                        <Th>Caregiver Name</Th>
                        <Th>Phone</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    {myData.map(caregiver => (
                        <Tr>
                            <Td>{caregiver.caregiverId}</Td>
                            <Td>{caregiver.caregiverName}</Td>
                            <Td>{caregiver.phone}</Td>
                        </Tr>
                    ))}
                    
                    
                        
                        
                    </Tbody>
                    
                </Table>
            </Box>
            {/* </TableContainer> */}
            </Flex>
        </Stack>
    </div>
  )
}

export default Caregiver