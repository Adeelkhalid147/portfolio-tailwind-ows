import React from "react";
import Image from "next/image";
import { Button, Box, Container, Heading, Flex } from "@chakra-ui/react";
import png from "../../public/about.png";

export default function OurMission() {
  return (
    <Box bg={"#EAE6FF"}>
      <Container maxW={{md:"4xl"}}>
        <Flex
          display={{ md:"flex", sm:"grid" }}
          pt={{lg:"1px",sm:"20px"}}
          


        >
          <Box flexBasis={"50%"} pr={"12px"} >
            <Heading pr={"12px"} fontSize={{sm:"37px" , mm:"40px",md:"23px",lg:"35px"}} pt={"50px"}  lineHeight={"1"}>
              Our mission is to make it as easy as possible for anyone in the
              world to diversify into real estate investing.
            </Heading>
            <Button
              bg={"#4D3FED"}
              textColor={"white"}
            mx="auto"
              rounded={"3xl"}
              mt={{sm:"35px" , lg:"50px"}}
              _hover={{ bg: "#645aed" }}
              width={"full"}
            >
              View Properties
            </Button>
          </Box>
          <Box flexBasis={"50%"} mx={{sm:"auto",lg:"15px"}} mt={{sm:"50px" ,md:"20px"}} >
            <Image src={png} alt="about" height={"500"} />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
