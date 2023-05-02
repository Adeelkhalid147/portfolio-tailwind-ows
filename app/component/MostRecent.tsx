import { Box,Container,Text,Image,Flex,Avatar,Button,SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import Cards from "../component/Cards" 

export default function MostRecent() {
  return (
    <Box>
          <Container maxW={1000}>
          <Box textAlign={"center"} mt={"40px"} mb={"10px"}>
          <Text mb={"60px"} fontSize={"2xl"}>
            <Box as="span" borderBottom="1px solid #E2E8F0" p={"15px"}>
            Most Recent
            </Box>
          </Text>
        </Box>


<Box>
  <SimpleGrid columns={3} spacing={5} minChildWidth="250px">
{/* Box 1 Start */}
{Cards.map((abc:any)=>(
<Box  border={"1px solid #E2E8F0"} borderRadius={"md"} boxShadow={"md"} _hover={{transform:"translateY(-10px)",transition:"transform 0.2s ease"}} position={"relative"} key={abc.Id}>
<Box>
    <Image src={abc.Image} alt='most1' borderTopRadius={"md"} height={'4cm'} width={'full'} />
    <Button bgColor={"#22C55E"}  _hover={{ bg:"#22C55E"}} textColor={"white"} size={'xs'} position={"absolute"} left={"15px"} top={"20px"}>{abc.Button}</Button>
</Box>
<Box >

    <Text borderBottom={"1px solid #E2E8F0"} px={"15px"} fontSize={"lg"} pt={"10px"}>{abc.Text}</Text>
<Flex justifyContent={"space-between"}>
              <Box  >
                <Flex>
                <Avatar name="Patrick Costello" src={abc.Avatar} mx={"20px"} m={"10px"} pt={"5px"} height={"40px"} width={"40px"}/>
                <Text pt={"20px"} fontSize={"sm"}>{abc.Name}</Text>
                </Flex>
              </Box>
              <Text opacity={"0.6"} pt={"20px"} pb={"20px"} fontSize={"sm"} pr={"15px"}>
                {abc.Date}
              </Text>
             
            </Flex>
</Box>
</Box>
 ))} 

</SimpleGrid>
</Box>
        </Container>
    </Box>
  )
}


