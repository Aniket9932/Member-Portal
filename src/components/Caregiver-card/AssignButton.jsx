import { Button, Flex } from '@chakra-ui/react'
import axios from 'axios';
import React from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function updateData(cid,uname,cname){
  console.log(cname);
  
    const data = {
      // "cid" : cid,
      // "uname" : uname
      "cid": cid,
      "cname": cname

    }
    console.warn(data);
    axios.post(`http://localhost:2000/auth/user/${uname}/caregiver/${cname}`,data)
      .then((data) => {

        console.log(data.data);
        toast.success("Caregiver Assigned");


      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message)
      })

}

function AssignButton(props) {
  
  return (
    <div>
      <Flex w={"100%"} justify={'end'}>
        <Button onClick={(e)=>updateData(props.cid,props.uname,props.cname)} colorScheme="teal" >Assign</Button>
      </Flex>
        
    </div>
  )
}

export default AssignButton