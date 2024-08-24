import React, { useState,useEffect } from 'react'
import axios from "axios";

import { Box, Container, Flex, Input, Stack, Text } from '@chakra-ui/react';
import CaregiverCard from './CaregiverCard';



function Search(props) {

    const [ data, setData ] = useState([]);
    const [ input, setInput ] = useState('');
    const [ output, setOutput ] = useState([]); 

    useEffect(() => {
        async function getData(){
        axios.get("http://localhost:2000/auth/caregivers")
        .then((res) => setData(res.data)
        );
        }
        getData()
    }, [])
    
    useEffect(() => {
      setOutput([])
      data.filter(val => {
        if(val.caregiverName.toLowerCase().includes(input.toLowerCase())){
            setOutput((output) => [...output,val])
        }else if(val.caregiverId == input){
          setOutput((output) => [...output,val])
        }else if(val.phone == input){
          setOutput((output) => [...output,val])
        }

      })

    }, [input])
    // console.log(props.uname);

  return (
    <div>
        <Stack>
            <Container centerContent><Input onChange={ (e) => setInput(e.target.value) } type={'text'} color="white" bgColor="whiteAlpha.400" placeholder='Search...' variant={'filled'} width='2xl'></Input></Container>
            <Flex wrap={'wrap'} justify='space-evenly' p={8} columnGap='20px'>
                
                    {output.map(item => (
                        
                            <CaregiverCard 
                            name={item.caregiverName}
                            id={item.caregiverId}
                            phone={item.phone}
                            uname={props.uname}
                            />
                        
                    ))}
                
            </Flex>
            {/* <Text>{props.uname}</Text> */}
        </Stack>
    </div>
  )
}

export default Search