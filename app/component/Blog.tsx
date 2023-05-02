import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function Blog() {
  return (
    <Box
      backgroundImage={"/bgimg.jpg"} bgSize={"cover"}  bgPosition={"center"}
    >
        <Box textAlign={"center"} py={"60px"} mt={"10px"}>
      <Heading color={"#304BA0"} letterSpacing={{sm:"-1px",md:"-3px"}} lineHeight="0.8" fontWeight={{sm:"bold"}} fontSize={{sm:"3xl",md:"7xl"}}>Real estate investing </Heading>
      <Heading  color={"#304BA0"} letterSpacing={{sm:"-1px",md:"-3px"}} lineHeight="1.5" fontWeight={{sm:"bold"}} fontSize={{sm:"3xl",md:"7xl"}}>wisdom from the pros.</Heading>
      
      <Text color={"#304BA0"} fontSize={"2xl"} letterSpacing={"-1px"} pt={"10px"} pl="2px" pr="2px" fontWeight={"semibold"} >Lofty AIs Real Estate Investment Blog</Text>
      
    </Box>
    </Box>
  );
}
