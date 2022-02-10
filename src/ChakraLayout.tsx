import {
  AspectRatio,
  Image,
  Box,
  Center,
  Square,
  Circle,
  HStack,
  Container,
  VStack,
  Flex,
  Spacer,
  Text,
  Grid,
  GridItem,
  Heading,
  Button,
  SimpleGrid,
  Stack,
  StackDivider,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import mountains from "./mountains.jpg";

const ChakraTest = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <AspectRatio maxW="560px" ratio={4 / 3}>
        <Image src={mountains} alt="mountains" objectFit="cover" />
      </AspectRatio>
      <AspectRatio maxW="800" ratio={16 / 9}>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24986.20740761492!2d145.94583674936527!3d-38.48127456115156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sau!4v1644380154129!5m2!1sen!2sau"
          width="600"
          height="450"
          loading="lazy"
        ></iframe>
      </AspectRatio>
      <Box bg="tomato" w="100%" p={4} color="white">
        This is the Box
      </Box>
      <Center bg="tomato" h="100px" color="white">
        This is the Center
      </Center>
      <HStack>
        <Center w="40px" h="40px" bg="tomato" color="white">
          <PhoneIcon />
        </Center>
        <Center w="40px" h="40px" bg="tomato" color="white">
          <Box as="span" fontWeight="bold" fontSize="lg">
            1
          </Box>
        </Center>
      </HStack>
      <HStack>
        <Circle size="40px" bg="tomato" color="white">
          <PhoneIcon />
        </Circle>
        <Square size="40px" bg="purple.700" color="white">
          <PhoneIcon />
        </Square>
      </HStack>
      <Container>
        There are many benefits to a joint design and development system. Not
        only does it bring benefits to the design team, but it also brings
        benefits to engineering teams. It makes sure that our experiences have a
        consistent look and feel, not just in our design specs, but in
        production
      </Container>
      <VStack>
        <Container maxW="container.xl">Extra-Large Container</Container>
        <Container maxW="container.lg">Large Container</Container>
        <Container maxW="container.md">Medium Container</Container>
        <Container maxW="container.sm">Small Container</Container>
      </VStack>
      <Container maxW="xl" centerContent>
        <Box padding="4" bg="gray.100" maxW="3xl">
          There are many benefits to a joint design and development system. Not
          only does it bring benefits to the design team.
        </Box>
      </Container>
      <Flex color="white">
        <Center w="100px" bg="green.900">
          <Text>Box 1</Text>
        </Center>
        <Square bg="blue.500" size="150px">
          <Text>Box 2</Text>
        </Square>
        <Box flex="1" bg="tomato">
          <Text>Box 3</Text>
        </Box>
      </Flex>
      <Flex>
        <Box p="4" bg="red.400">
          Box 1
        </Box>
        <Spacer />
        <Box p="4" bg="green.400">
          Box 2
        </Box>
      </Flex>
      <Box>
        <Text>Flex and Spacer: Full width, equal Spacing</Text>
        <Flex>
          <Box w="70px" h="10" bg="red.500" />
          <Spacer />
          <Box w="170px" h="10" bg="red.500" />
          <Spacer />
          <Box w="180px" h="10" bg="red.500" />
        </Flex>

        <Text>
          Grid: The children start at the beginning, the 1/3 mark and 2/3 mark
        </Text>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <Box w="70px" h="10" bg="blue.500" />
          <Box w="170px" h="10" bg="blue.500" />
          <Box w="180px" h="10" bg="blue.500" />
        </Grid>

        <Text>
          HStack: The children have equal spacing but don't span the whole
          container
        </Text>
        <HStack spacing="24px">
          <Box w="70px" h="10" bg="teal.500" />
          <Box w="170px" h="10" bg="teal.500" />
          <Box w="180px" h="10" bg="teal.500" />
        </HStack>
      </Box>
      <Flex>
        <Box p="2">
          <Heading size="md">Chakra App</Heading>
        </Box>
        <Spacer />
        <Box>
          <Button colorScheme="teal" mr="4">
            Sign Up
          </Button>
          <Button colorScheme="teal">Log in</Button>
        </Box>
      </Flex>
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
      </Grid>
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1} bg="tomato" />
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={4} bg="tomato" />
      </Grid>
      <Grid templateColumns="repeat(5, 1fr)" gap={4}>
        <GridItem colSpan={2} h="10" bg="tomato" />
        <GridItem colStart={4} colEnd={6} h="10" bg="green.300" />
      </Grid>
      <SimpleGrid columns={2} spacing={10}>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
      </SimpleGrid>
      <SimpleGrid columns={[2, null, 3]} spacing="40px">
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
      </SimpleGrid>
      <SimpleGrid minChildWidth="120px" spacing="40px">
        <Box bg="magenta" height="80px"></Box>
        <Box bg="magenta" height="80px"></Box>
        <Box bg="magenta" height="80px"></Box>
        <Box bg="magenta" height="80px"></Box>
        <Box bg="magenta" height="80px"></Box>
        <Box bg="magenta" height="80px"></Box>
      </SimpleGrid>
      <SimpleGrid columns={2} spacingX="40px" spacingY="20px">
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
      </SimpleGrid>
      <HStack spacing="24px">
        <Box w="40px" h="40px" bg="yellow.200">
          1
        </Box>
        <Box w="40px" h="40px" bg="tomato">
          2
        </Box>
        <Box w="40px" h="40px" bg="pink.100">
          3
        </Box>
      </HStack>
      <Stack direction={["column", "row"]} spacing="24px">
        <Box w="40px" h="40px" bg="yellow.200">
          1
        </Box>
        <Box w="40px" h="40px" bg="tomato">
          2
        </Box>
        <Box w="40px" h="40px" bg="pink.100">
          3
        </Box>
      </Stack>
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="stretch"
      >
        <Box h="40px" bg="yellow.200">
          1
        </Box>
        <Box h="40px" bg="tomato">
          2
        </Box>
        <Box h="40px" bg="pink.100">
          3
        </Box>
      </VStack>
      <Wrap>
        <WrapItem>
          <Center w="180px" h="80px" bg="red.200">
            Box 1
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="green.200">
            Box 2
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="tomato">
            Box 3
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="blue.200">
            Box 4
          </Center>
        </WrapItem>
      </Wrap>
      <Wrap spacing="30px">
        <WrapItem>
          <Center w="180px" h="80px" bg="red.200">
            Box 1
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="green.200">
            Box 2
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="tomato">
            Box 3
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="blue.200">
            Box 4
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="blackAlpha.500">
            Box 5
          </Center>
        </WrapItem>
      </Wrap>
      <Wrap spacing="30px" align="center">
        <WrapItem>
          <Center w="180px" h="80px" bg="red.200">
            Box 1
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="40px" bg="green.200">
            Box 2
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="120px" h="80px" bg="tomato">
            Box 3
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="40px" bg="blue.200">
            Box 4
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="blackAlpha.500">
            Box 5
          </Center>
        </WrapItem>
      </Wrap>
      <Wrap spacing="30px" justify="center">
        <WrapItem>
          <Center w="180px" h="80px" bg="red.200">
            Box 1
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="green.200">
            Box 2
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="120px" h="80px" bg="tomato">
            Box 3
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="blue.200">
            Box 4
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="blackAlpha.500">
            Box 5
          </Center>
        </WrapItem>
      </Wrap>
    </div>
  );
};

export default ChakraTest;
