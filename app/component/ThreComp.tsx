import { Box, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function ThreComp() {
  return (
    <Box borderBottom={"1px solid #E2E8F0"}>
        <Container maxW={"1025"}>
      <Flex >
        <Box flexBasis={"33%"} textAlign={"center"} py={"20px"} _hover={{ bg:"gray.300"}} textColor={"gray.400"} fontWeight={"semibold"} fontSize={"md"}>
          <Text>Investment Markets</Text>
        </Box>
        <Box flexBasis={"33%"} py={"20px"} textAlign={"center"} _hover={{ bg:"gray.300"}}  textColor={"gray.400"} fontWeight={"semibold"} fontSize={"md"}>
          <Text>Real Estate Investing 101</Text>
        </Box>
        <Box flexBasis={"34%"} py={"20px"} textAlign={"center"} _hover={{ bg:"gray.300"}}  textColor={"gray.400"} fontWeight={"semibold"} fontSize={"md"}>
          <Text>Lofty News</Text>
        </Box>
      </Flex>
      </Container>
    </Box>
  );
}
