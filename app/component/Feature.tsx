import { Box, Container, Heading, Text, Avatar, Flex,Spacer, Button } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export default function Feature() {
  return (
    <Box>
      <Container maxW={1000}>
        <Box textAlign={"center"} mt={"40px"} mb={"10px"} >
          <Text mb={"20px"} fontSize={"2xl"}>
            <Box as="span" borderBottom="1px solid #E2E8F0" p={"15px"}>
              Featured Posts
            </Box>
          </Text>
        </Box>





<Flex display={{ md:"flex", sm:"grid" }}>
    {/* box 1 */}
        <Box _hover={{transform:"translateY(-10px)",transition:"transform 0.2s ease"}} position={"relative"} mb={"50px"}>
          <Box bgImage="/1001.png" bgSize={"cover"} bgPosition={"center"} opacity={"90%"} h={"300px"} m={"5px"}>
            <Text
            m={"20px"}
            pt={"50px"}
              fontSize={{sm:"md",md:"2xl"}}
              textColor={"white"}
              pr={"5"}
              pb={"11"}
              position={{sm:'absolute', md:'initial'}}
              bottom={{sm:'50px'}}
            >
              One Million in Rental Income Paid to Investors
            </Text>
            <Text textColor={"white"} pt={"8px"} mx={"20px"} display={{sm:'none', md:'block'}} >
              Over $1,000,000 USD in rental returns have been paid out to our
              real estate investors.
            </Text>
            <Box>
            <Flex justifyContent={"space-between"} position={'absolute'} bottom={'20px'} w={'full'}>
              <Box>
                <Flex>
                <Avatar name="Patrick Costello" src="/Costello.png" mx={{sm:"15px",md:"20px"}} mt={"15px"}/>
                <Text textColor={"white"} fontSize={{sm:"smaller",md:""}} pt={"20px"}>Patrick Costello</Text>
                </Flex>
              </Box>
              <Text textColor={"white"} opacity={"0.6"} pt={"20px"} pr={"25px"} fontSize={"smaller"}>
                October 12,2022
              </Text>
            </Flex>
              <Button bgColor={"#22C55E"}  _hover={{ bg:"#22C55E"}} textColor={"white"} fontSize={"small"} position={"absolute"} left={"25px"} top={"30px"}>LOFTY NEWS</Button>
            </Box>
          </Box>
        </Box>
{/* box 1 end */}

    {/* box 2 */}

    <Box _hover={{transform:"translateY(-10px)",transition:"transform 0.2s ease"}} position={"relative"} mb={"50px"}>
          <Box bgImage="/1002.jpeg" bgSize={"cover"} bgPosition={"center"} opacity={"90%"} h={"300px"} m={"5px"}>
            <Text
            m={"20px"}
            pt={"50px"}
              fontSize={{sm:"md",md:"2xl"}}
              textColor={"white"}
              pr={"5"}
              pb={"11"}
              position={{sm:'absolute', md:'initial'}}
              bottom={{sm:'50px'}}
            >
              Lofty is Bridging DeFi and TradFi
            </Text>
            <Text textColor={"white"} pt={"8px"} mx={"20px"} display={{sm:'none', md:'block'}} >
             Lofty wallet makes it easy to buy fractional real estate - without a crypto wallet.
            </Text>
            <Box>
            <Flex justifyContent={"space-between"} position={'absolute'} bottom={'20px'} w={'full'}>
              <Box>
                <Flex>
                <Avatar name="Patrick Costello" src="/Costello.png" mx={{sm:"15px",md:"20px"}} mt={"15px"}/>
                <Text textColor={"white"} fontSize={{sm:"smaller",md:""}} pt={"20px"}>Patrick Costello</Text>
                </Flex>
              </Box>
              <Text textColor={"white"} opacity={"0.9"} pt={"20px"} pr={"25px"} fontSize={"smaller"}>
                October 12,2022
              </Text>
            </Flex>
              <Button bgColor={"#22C55E"}  _hover={{ bg:"#22C55E"}} textColor={"white"} fontSize={"small"} position={"absolute"} left={"25px"} top={"30px"}>LOFTY NEWS</Button>
            </Box>
          </Box>
        </Box>
            {/* box 2 end*/}

        </Flex>








      </Container>
    </Box>
  );
}
