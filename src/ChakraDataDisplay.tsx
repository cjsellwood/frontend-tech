import {
  Badge,
  Stack,
  Flex,
  Avatar,
  Text,
  Box,
  CloseButton,
  Code,
  Divider,
  Center,
  Kbd,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
  HStack,
} from "@chakra-ui/react";

import { CheckCircleIcon, SettingsIcon, AddIcon } from "@chakra-ui/icons";

const ChakraDataDisplay = () => {
  return (
    <div>
      <Badge>Default</Badge>
      <Stack direction="row">
        <Badge>Default</Badge>
        <Badge colorScheme="green">Success</Badge>
        <Badge colorScheme="red">Removed</Badge>
        <Badge colorScheme="purple">New</Badge>
      </Stack>
      <Stack direction="row">
        <Badge variant="outline" colorScheme="green">
          Default
        </Badge>
        <Badge variant="solid" colorScheme="green">
          Success
        </Badge>
        <Badge variant="subtle" colorScheme="green">
          Removed
        </Badge>
      </Stack>
      <Flex>
        <Avatar src="https://bit.ly/sage-adebayo" />
        <Box ml="3">
          <Text fontWeight="bold">
            Segun Adebayo
            <Badge ml="1" colorScheme="green">
              New
            </Badge>
          </Text>
          <Text fontSize="sm">UI Engineer</Text>
        </Box>
      </Flex>
      <Text fontSize="xl" fontWeight="bold">
        Segun Adebayo
        <Badge ml="1" fontSize="0.8em" colorScheme="green">
          New
        </Badge>
      </Text>
      <CloseButton />
      <Stack direction="row" spacing={6}>
        <CloseButton size="sm" />
        <CloseButton size="md" />
        <CloseButton size="lg" />
      </Stack>
      <Code>Hello world</Code>
      <Stack direction="row">
        <Code children="console.log(welcome)" />
        <Code colorScheme="red" children="var chakra = 'awesome!'" />
        <Code colorScheme="yellow" children="npm install chakra" />
      </Stack>
      <Divider />
      <Box p="5"></Box>
      <Divider orientation="horizontal" />
      <Center height="50px">
        <Divider orientation="vertical" />
      </Center>
      <Stack direction="row" h="100px" p={4}>
        <Divider orientation="vertical" />
        <Text>Chakra UI</Text>
      </Stack>
      <span>
        <Kbd>shift</Kbd> + <Kbd>H</Kbd>
      </span>
      <span>
        <Kbd>shift</Kbd> then <Kbd>H</Kbd>
      </span>
      <span>
        <Kbd>alt</Kbd> or <Kbd>option</Kbd>
      </span>
      <UnorderedList>
        <ListItem>Lorem ipsum dolor sit amet</ListItem>
        <ListItem>Consectetur adipiscing elit</ListItem>
        <ListItem>Integer molestie lorem at massa</ListItem>
        <ListItem>Facilisis in pretium nisl aliquet</ListItem>
      </UnorderedList>
      <OrderedList>
        <ListItem>Lorem ipsum dolor sit amet</ListItem>
        <ListItem>Consectetur adipiscing elit</ListItem>
        <ListItem>Integer molestie lorem at massa</ListItem>
        <ListItem>Facilisis in pretium nisl aliquet</ListItem>
      </OrderedList>
      <List spacing={3}>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Assumenda, quia temporibus eveniet a libero incidunt suscipit
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
        </ListItem>
        {/* You can also use custom icons from react-icons */}
        <ListItem>
          <ListIcon as={SettingsIcon} color="green.500" />
          Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
        </ListItem>
      </List>
      <Stat>
        <StatLabel>Collected Fees</StatLabel>
        <StatNumber>£0.00</StatNumber>
        <StatHelpText>Feb 12 - Feb 28</StatHelpText>
      </Stat>
      <StatGroup>
        <Stat>
          <StatLabel>Sent</StatLabel>
          <StatNumber>345,670</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>

        <Stat>
          <StatLabel>Clicked</StatLabel>
          <StatNumber>45</StatNumber>
          <StatHelpText>
            <StatArrow type="decrease" />
            9.05%
          </StatHelpText>
        </Stat>
      </StatGroup>
      <Table variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
          <Tr>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
            <Td isNumeric>30.48</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td isNumeric>0.91444</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot>
      </Table>
      <Table variant="striped" colorScheme="teal">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
          <Tr>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
            <Td isNumeric>30.48</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td isNumeric>0.91444</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot>
      </Table>
      <Table size="sm">
        <Thead>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
          <Tr>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
            <Td isNumeric>30.48</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td isNumeric>0.91444</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot>
      </Table>
      <Tag>Sample Tag</Tag>
      <HStack spacing={4}>
        {["sm", "md", "lg"].map((size) => (
          <Tag size={size} key={size} variant="solid" colorScheme="teal">
            Teal
          </Tag>
        ))}
      </HStack>
      <HStack spacing={4}>
        {["sm", "md", "lg"].map((size) => (
          <Tag size={size} key={size} variant="subtle" colorScheme="cyan">
            <TagLeftIcon boxSize="12px" as={AddIcon} />
            <TagLabel>Cyan</TagLabel>
          </Tag>
        ))}
      </HStack>
      <HStack spacing={4}>
        {["sm", "md", "lg"].map((size) => (
          <Tag size={size} key={size} variant="outline" colorScheme="blue">
            <TagLabel>Blue</TagLabel>
            <TagRightIcon as={SettingsIcon} />
          </Tag>
        ))}
      </HStack>
      <HStack spacing={4}>
        {["sm", "md", "lg"].map((size) => (
          <Tag
            size={size}
            key={size}
            borderRadius="full"
            variant="solid"
            colorScheme="green"
          >
            <TagLabel>Green</TagLabel>
            <TagCloseButton />
          </Tag>
        ))}
      </HStack>
      <Tag size="lg" colorScheme="red" borderRadius="full">
        <Avatar
          src="https://bit.ly/sage-adebayo"
          size="xs"
          name="Segun Adebayo"
          ml={-1}
          mr={2}
        />
        <TagLabel>Segun</TagLabel>
      </Tag>
    </div>
  );
};

export default ChakraDataDisplay;
