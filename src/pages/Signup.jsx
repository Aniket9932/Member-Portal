import { Button, Divider, FormLabel, Heading, Input,Box, Flex, Img, chakra } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { AiOutlineRight } from 'react-icons/ai'


function Signup() {
  const initialValues = { firstName: "", lastName:"", username: "", password: "", address:"" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  let navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate(formValues);
    console.log(err);
    // setFormErrors(validate(formValues));
    // setIsSubmit(true);
    // await axios.post("http://localhost:8081/register", formValues);
    // navigate("/");

    try {
      if(Object.keys(err).length === 0) {
        await axios.post("http://localhost:2000/auth/register", formValues);
        console.log(formValues);
        navigate("/login");
      }else { setFormErrors(err); } 
      
    } catch (error) {
      console.log(error);
    }
      

  };

  // useEffect(() => {
  //   console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log(formValues);
  //   }
  // }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regexname = /^[a-zA-Z ]{2,40}$/;
    const regexemail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regexpassword = /^[@#][A-Za-z0-9]{7,13}$/; 


    if (!values.firstName) {
      errors.firstName = "Fill First Name!";  
    }else if(!regexname.test(values.firstName)){
      errors.firstName = "Fill Valid Name";
    }

    else if (!values.lastName) {
      errors.lastName = "Fill Last Name!";
    }else if(!regexname.test(values.lastName)){
      errors.lastName = "Fill Valid Name";
    }

    else if (!values.username) {
      errors.email = "Fill Email!";
    } else if (!regexemail.test(values.username)) {
      errors.email = "Fill in valid Email format!";
    }
    else if (!values.password) {
      errors.password = "Fill Password";
    } else if (values.password.length < 4) {
      errors.password = "Password is too short";
    } else if (values.password.length > 10) {
      errors.password = "Password is too long";
    } else if (!regexpassword.test(values.password)){
      errors.password = "Fill proper password [Special Characters(@,#) Uppercase, LowerCase letters, Numbers]";
    }



    return errors;
  };

  return (
    <Flex className="container" borderWidth={1} align={'center'}
    justify={'center'} minH={'100vh'} bgImage='https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-036.jpg' bgRepeat={"no-repeat"} bgSize='cover' p={10}>
      <Box w={'30%'} p={5} >
        {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="ui message success">Signed in successfully</div>
          
        ) : (
          <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        )} */}

        <chakra.form onSubmit={handleSubmit}>
          <Heading fontWeight={'semi-bold'} fontFamily='fantasy' letterSpacing={1}>Become a Member</Heading>
          <Divider className="ui divider" mt={2} mb={2}></Divider>

          <chakra.div className="ui form">

            <Flex>
              <Box>
                <chakra.div className="field">
                    <FormLabel mt={8} letterSpacing={1}>First Name 
                      <chakra.sup color={'red'}>*</chakra.sup>
                      {/* <sup>*</sup> */}
                    </FormLabel>
                    <Input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formValues.firstName}
                      onChange={handleChange}
                      autoComplete='false'
                    />
                </chakra.div>
                <chakra.p color={'red'}>{formErrors.firstName}</chakra.p>
              </Box>

              <Box>
                <chakra.div className="field">
                  <FormLabel mt={8} ml='3' letterSpacing={1}>Last Name
                    <chakra.sup color={'red'}>*</chakra.sup>
                  </FormLabel>
                  <Input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formValues.lastName}
                    onChange={handleChange}
                    ml='3'
                  />
                </chakra.div>
                <chakra.p ml={3} color='red'>{formErrors.lastName}</chakra.p>
              </Box>
            </Flex>


            <chakra.div className="field">
              <FormLabel mt={2} letterSpacing={1}>Email
                <chakra.sup color={'red'}>*</chakra.sup>
              </FormLabel>
              <Input
                type="text"
                name="username"
                placeholder="Email"
                value={formValues.username}
                onChange={handleChange}
              />
            </chakra.div>
            <chakra.p color={'red'}>{formErrors.email}</chakra.p>


            <chakra.div className="field">
              <FormLabel mt={2} letterSpacing={1}>Password
                <chakra.sup color={'red'}>*</chakra.sup>
              </FormLabel>
              <Input
                type={show ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
              />
              <Button h='1.75rem' size='sm' onClick={handleClick} mt='2'>
                  {show ? 'Hide' : 'Show'}
              </Button>
              
            </chakra.div>
            <chakra.p color={'red'}>{formErrors.password}</chakra.p>


            <chakra.div className="field">
              <FormLabel mt={2} letterSpacing={1}>Address</FormLabel>
              <Input
                type="text"
                name="address"
                placeholder="Address"
                value={formValues.address}
                onChange={handleChange}
              />
            </chakra.div>
            
            <Button type="submit" mt={12} colorScheme='blue' rightIcon={<AiOutlineRight/>} letterSpacing={1}>Submit</Button>
          </chakra.div>
        </chakra.form>
        </Box>
        <Box w={'30%'} ml='8'><Img src="https://cdn.pixabay.com/photo/2022/01/22/01/54/bio-6956069__340.png"></Img></Box>
    </Flex>
  );
}

export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (regex.test(email)) {
    return true;
  }
  return false;
};

export const validatePassword = (password) => {
  const regex = /^[@#][A-Za-z0-9]{7,13}$/;
  if (regex.test(password)) {
    return true;
  }
  return false;
};

export const validateName = (name) => {
  const regex = /^[a-zA-Z ]{2,40}$/;
  if (regex.test(name)) {
    return true;
  }
  return false;
};


export default Signup;