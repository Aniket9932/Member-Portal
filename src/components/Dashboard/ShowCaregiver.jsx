import {
  Button,
  Flex,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Container,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import DetailsCard from "../Caregiver-card/DetailsCard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ShowCaregiver(props) {
  // const [careName,setCareName] = useState("Not assiged yet...")

  const [myData, setMyData] = useState([]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const getData = (e) => {
    // e.preventDefault();
    console.log(props.uname);
    axios
      .get(`http://localhost:2000/auth/users/name/${props.uname}`)
      .then((response) => {
        // console.log(response.data)
        // setMyData(response.data.caregiver)
        // careName = response.data.caregivers[0].caregiverName;
        // if(response.data.cname != null){

        // setCareName(response.data.caregivers[0].caregiverName);
        setMyData(response.data.caregivers);

        // }
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status == 500) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Error on server side !!");
        }
      });
  };

  //   useEffect(() => {
  //     async function getData(){
  //     axios.get("http://localhost:2000/auth/users/name/${props.uname}")
  //     .then((res) => console.log(res.data)
  //     );
  //     }
  //     getData()
  // }, [])

  return (
    <div>
      <Flex align={"center"} justify="center" mt={7}>
        {/* <Button onClick={getData}>Show Caregiver</Button>
        <Text>Name : {careName}</Text> */}
        <Button
          onClick={() => {
            getData();
            onOpen();
          }}
        >
          Show Caregiver
        </Button>

        <Modal isOpen={isOpen} onClose={onClose} size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Caregiver</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>
                {/* Name : {myData.caregiverName} */}
                {myData.length ? "" : "Not Caregivers Assigned"}
                <Container>
                  {myData.map((item) => (
                    <DetailsCard
                      name={item.caregiverName}
                      id={item.caregiverId}
                      phone={item.phone}
                    />
                  ))}
                </Container>
              </Text>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </div>
  );
}

export default ShowCaregiver;
