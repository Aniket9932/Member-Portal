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
import Search from '../components/Caregiver-card/Search';
import ShowCaregiver from '../components/Dashboard/ShowCaregiver';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

  
  // import {  }
  
  export default function Dashboard() {
      const location = useLocation(); 
    //   console.log(location)
      const state = location?.state || {};
      const username = state?.username || "Username";


    return (
      <div>
        <Stack bgGradient={'linear(to-r, cyan.400, blue.500, purple.600)'} minH="100vh">

          
          {/* <Stack w={'100%'} bgImage='https://wallpaperaccess.com/full/773876.jpg' minH={'50vh'}
          bgRepeat='no-repeat' bgSize={'cover'} p={"100px"}> */}
          <Stack w={'100%'} >
            <Flex wrap={'wrap'} justify={'center'} mt='90px'>
                <Box p='6' w={'60%'}>
                  
                    <Heading align={'center'} fontWeight="semi-bold" bgColor={'whiteAlpha.800'} bgClip='text' letterSpacing={2} p='4'>{`Welcome back, ${username}`}</Heading>
                    {/* <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3tR-csnc8upbm7OOF8ImiEJItKhRTVy3oIA&usqp=CAU'></Image> */}
                    
                    <Text align={'center'} fontSize='20px' letterSpacing={1} color="whiteAlpha.600">Hope you are having a nice day !</Text>
                  
                    <ShowCaregiver uname={username}/>
                    {/* <Img src='https://freeiconshop.com/wp-content/uploads/edd/person-outline-filled.png'></Img> */}
                </Box>

                
                
            </Flex>
            
          </Stack>
          <Stack w={'100%'} p={20} >
            <Box borderWidth={1} w="100%">
              <Heading align={'left'} fontWeight="semi-bold" bgColor={'white'} bgClip='text' letterSpacing={2} p='6'>Caregiver</Heading>
              <Search uname={username}/>
            </Box>
          </Stack>
        </Stack>
          {/* <ToastContainer/> */}
      </div>
    );
  }