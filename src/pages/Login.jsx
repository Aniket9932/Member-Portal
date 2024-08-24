import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  chakra,
  Toast,
  Icon,
  Divider
} from '@chakra-ui/react';
import { useState, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginUser } from './user-service';
import {  useNavigate } from "react-router-dom";
import { AiOutlineRight } from 'react-icons/ai';
import { LoginContext } from "../context/LoginContext";

function Login() {

  // const{ loginDetail, setLoginDetail } = useContext(LoginContext);

  let navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show)

  const [loginDetail, setLoginDetail] = useState({
    username: '',
    password: ''
  })

  const handleChange = (event, field) => {

    let actualValue = event.target.value;
    setLoginDetail({
      ...loginDetail,
      [field]: actualValue
    })

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(loginDetail);

    if (!loginDetail.username || !loginDetail.password) {
      toast.error("username and password required !!");
    }

    loginUser(loginDetail).then((data) => {
      console.log("user login: ")
      console.log(data)
      navigate("/dashboard", { state:{username:data.userName} } );
    }).catch(error => {
      if(error.response.status == 500){
        toast.error(error.response.data.message)
      } else {
        toast.error("Error on server side !!")
      }
    })


  }

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}
    bgRepeat='no-repeat'
     bgSize='cover'
     p='5'
    bgImage='https://cdn.wallpapersafari.com/32/67/uNnmEU.jpg' >
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <chakra.form onSubmit={handleSubmit}>
            <Heading fontWeight={'semi-bold'} fontFamily='fantasy' mb={2} letterSpacing={1}>Login</Heading>
            <Divider/>

            <chakra.div className="ui form" mt={9}>


              <chakra.div className="field">
                <FormLabel letterSpacing={1}>Username</FormLabel>
                <Input
                  type="email"
                  id="username"
                  placeholder="Username"
                  value={loginDetail.username}
                  onChange={(e) => handleChange(e, 'username')}
                />
              </chakra.div>
              <chakra.div className="field" mt={4}>
                <FormLabel letterSpacing={1}>Password</FormLabel>
                <Input
                  type={show ? 'text' : 'password'}
                  id="password"
                  placeholder="Password"
                  value={loginDetail.password}
                  onChange={(e) => handleChange(e, 'password')}
                />
                <Button h='1.75rem' size='sm' onClick={handleClick} mt='2'>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </chakra.div>

              <Button type="submit" className="fluid ui button blue" mt={12} colorScheme='blue' letterSpacing={1} rightIcon={<AiOutlineRight/>}>Submit</Button>
            </chakra.div>
          </chakra.form>
        </Stack>
      </Flex>
      <Flex flex={1} justify='center' align={'center'} >
        {/* <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://i.pinimg.com/736x/0c/c4/74/0cc474ce749e8803d4e776a9c8e2dd98.jpg'
          }
        /> */}
        <Image src='https://i.pinimg.com/originals/6b/1b/22/6b1b22573f9f3d4bba11a9fa5cb45652.png'
         ></Image>
      </Flex>
      {/* <ToastContainer></ToastContainer> */}
    </Stack>
    
  );
}

export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (regex.test(email)) {
    return true;
  }
  return false;
};


export default Login