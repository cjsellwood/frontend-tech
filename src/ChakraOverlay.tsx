import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Button,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  RadioGroup,
  Radio,
  Stack,
  DrawerProps,
  Box,
  FormLabel,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Textarea,
  InputGroup,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Image,
  IconButton,
  Portal,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  FormControl,
  ModalProps,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  HStack,
  useBoolean,
  Tooltip,
  VStack,
  WrapItem,
  Wrap,
} from "@chakra-ui/react";
import {
  AddIcon,
  ChevronDownIcon,
  HamburgerIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
  PhoneIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import { useState, useRef } from "react";

const ChakraOverlay = () => {
  const [isOpen2, setIsOpen2] = useState(false);
  const onClose2 = () => setIsOpen2(false);
  const cancelRef2 = useRef(null);

  const cancelRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    isOpen: isOpen3,
    onOpen: onOpen3,
    onClose: onClose3,
  } = useDisclosure();
  const btnRef = useRef(null);

  const {
    isOpen: isOpen4,
    onOpen: onOpen4,
    onClose: onClose4,
  } = useDisclosure();
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("right");

  const {
    isOpen: isOpen5,
    onOpen: onOpen5,
    onClose: onClose5,
  } = useDisclosure();
  const firstField = useRef(null);

  const [size, setSize] = useState("md");
  const {
    isOpen: isOpen6,
    onOpen: onOpen6,
    onClose: onClose6,
  } = useDisclosure();

  const handleClick = (newSize: string) => {
    setSize(newSize);
    onOpen6();
  };

  const sizes = ["xs", "sm", "md", "lg", "xl", "full"];

  const {
    isOpen: isOpen7,
    onOpen: onOpen7,
    onClose: onClose7,
  } = useDisclosure();

  const {
    isOpen: isOpen8,
    onOpen: onOpen8,
    onClose: onClose8,
  } = useDisclosure();

  const {
    isOpen: isOpen9,
    onOpen: onOpen9,
    onClose: onClose9,
  } = useDisclosure();
  const finalRef = useRef(null);

  const {
    isOpen: isOpen10,
    onOpen: onOpen10,
    onClose: onClose10,
  } = useDisclosure();

  const initialRef10 = useRef(null);
  const finalRef10 = useRef(null);

  const {
    isOpen: isOpen11,
    onOpen: onOpen11,
    onClose: onClose11,
  } = useDisclosure();

  const {
    isOpen: isOpen12,
    onOpen: onOpen12,
    onClose: onClose12,
  } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] =
    useState<ModalProps["scrollBehavior"]>("inside");

  const btnRef12 = useRef(null);

  const {
    isOpen: isOpen13,
    onOpen: onOpen13,
    onClose: onClose13,
  } = useDisclosure();
  const [size2, setSize2] = useState("md");

  const handleSizeClick = (newSize: string) => {
    setSize2(newSize);
    onOpen13();
  };

  const [isEditing, setIsEditing] = useBoolean();
  const [color, setColor] = useState("red");

  const sizes2 = ["xs", "sm", "md", "lg", "xl", "full"];

  const initRef = useRef(null);
  return (
    <div>
      <>
        <Button colorScheme="red" onClick={() => setIsOpen2(true)}>
          Delete Customer
        </Button>

        <AlertDialog
          isOpen={isOpen2}
          leastDestructiveRef={cancelRef2}
          onClose={onClose2}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Delete Customer
              </AlertDialogHeader>

              <AlertDialogBody>
                Are you sure? You can't undo this action afterwards.
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef2} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="red" onClick={onClose2} ml={3}>
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
      <>
        <Button onClick={onOpen}>Discard</Button>
        <AlertDialog
          motionPreset="slideInBottom"
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isOpen={isOpen}
          isCentered
        >
          <AlertDialogOverlay />

          <AlertDialogContent>
            <AlertDialogHeader>Discard Changes?</AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
              Are you sure you want to discard all of your notes? 44 words will
              be deleted.
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                No
              </Button>
              <Button colorScheme="red" ml={3}>
                Yes
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </>
      <>
        <Button ref={btnRef} colorScheme="teal" onClick={onOpen3}>
          Open
        </Button>
        <Drawer
          isOpen={isOpen3}
          placement="right"
          onClose={onClose3}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>

            <DrawerBody>
              <Input placeholder="Type here..." />
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose3}>
                Cancel
              </Button>
              <Button colorScheme="blue">Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
      <>
        <RadioGroup
          defaultValue={placement}
          onChange={(val) => setPlacement(val as DrawerProps["placement"])}
        >
          <Stack direction="row" mb="4">
            <Radio value="top">Top</Radio>
            <Radio value="right">Right</Radio>
            <Radio value="bottom">Bottom</Radio>
            <Radio value="left">Left</Radio>
          </Stack>
        </RadioGroup>
        <Button colorScheme="blue" onClick={onOpen4}>
          Open
        </Button>
        <Drawer placement={placement} onClose={onClose4} isOpen={isOpen4}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
            <DrawerBody>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
      <>
        <Button leftIcon={<AddIcon />} colorScheme="teal" onClick={onOpen5}>
          Create user
        </Button>
        <Drawer
          isOpen={isOpen5}
          placement="right"
          initialFocusRef={firstField}
          onClose={onClose5}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">
              Create a new account
            </DrawerHeader>

            <DrawerBody>
              <Stack spacing="24px">
                <Box>
                  <FormLabel htmlFor="username">Name</FormLabel>
                  <Input
                    ref={firstField}
                    id="username"
                    placeholder="Please enter user name"
                  />
                </Box>

                <Box>
                  <FormLabel htmlFor="url">Url</FormLabel>
                  <InputGroup>
                    <InputLeftAddon>http://</InputLeftAddon>
                    <Input
                      type="url"
                      id="url"
                      placeholder="Please enter domain"
                    />
                    <InputRightAddon>.com</InputRightAddon>
                  </InputGroup>
                </Box>

                <Box>
                  <FormLabel htmlFor="owner">Select Owner</FormLabel>
                  <Select id="owner" defaultValue="segun">
                    <option value="segun">Segun Adebayo</option>
                    <option value="kola">Kola Tioluwani</option>
                  </Select>
                </Box>

                <Box>
                  <FormLabel htmlFor="desc">Description</FormLabel>
                  <Textarea id="desc" />
                </Box>
              </Stack>
            </DrawerBody>

            <DrawerFooter borderTopWidth="1px">
              <Button variant="outline" mr={3} onClick={onClose5}>
                Cancel
              </Button>
              <Button colorScheme="blue">Submit</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
      <>
        {sizes.map((size) => (
          <Button
            onClick={() => handleClick(size)}
            key={size}
            m={4}
          >{`Open ${size} Drawer`}</Button>
        ))}

        <Drawer onClose={onClose6} isOpen={isOpen6} size={size}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader>{`${size} drawer contents`}</DrawerHeader>
            <DrawerBody>
              {size === "full"
                ? `You're trapped 😆 , refresh the page to leave or press 'Esc' key.`
                : null}
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
      <>
        <Button onClick={onOpen7}>Open</Button>
        <Drawer isOpen={isOpen7} onClose={onClose7}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>

            <DrawerBody>
              <form
                id="my-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log("submitted");
                }}
              >
                <Input name="nickname" placeholder="Type here..." />
              </form>
            </DrawerBody>

            <DrawerFooter>
              <Button type="submit" form="my-form">
                Save
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Actions
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton
              isActive={isOpen}
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              {isOpen ? "Close" : "Open"}
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem onClick={() => alert("Kagebunshin")}>
                Create a Copy
              </MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
      <Menu>
        <MenuButton
          px={4}
          py={2}
          transition="all 0.2s"
          borderRadius="md"
          borderWidth="1px"
          _hover={{ bg: "gray.400" }}
          _expanded={{ bg: "blue.400" }}
          _focus={{ boxShadow: "outline" }}
        >
          File <ChevronDownIcon />
        </MenuButton>
        <MenuList>
          <MenuItem>New File</MenuItem>
          <MenuItem>New Window</MenuItem>
          <MenuDivider />
          <MenuItem>Open...</MenuItem>
          <MenuItem>Save File</MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Your Cats
        </MenuButton>
        <MenuList>
          <MenuItem minH="48px">
            <Image
              boxSize="2rem"
              borderRadius="full"
              src="https://placekitten.com/100/100"
              alt="Fluffybuns the destroyer"
              mr="12px"
            />
            <span>Fluffybuns the Destroyer</span>
          </MenuItem>
          <MenuItem minH="40px">
            <Image
              boxSize="2rem"
              borderRadius="full"
              src="https://placekitten.com/120/120"
              alt="Simon the pensive"
              mr="12px"
            />
            <span>Simon the pensive</span>
          </MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
        />
        <MenuList>
          <MenuItem icon={<AddIcon />} command="⌘T">
            New Tab
          </MenuItem>
          <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
            New Window
          </MenuItem>
          <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
            Open Closed Tab
          </MenuItem>
          <MenuItem icon={<EditIcon />} command="⌘O">
            Open File...
          </MenuItem>
        </MenuList>
      </Menu>
      <Menu isLazy>
        <MenuButton>Open menu</MenuButton>
        <MenuList>
          {/* MenuItems are not rendered unless Menu is open */}
          <MenuItem>New Window</MenuItem>
          <MenuItem>Open Closed Tab</MenuItem>
          <MenuItem>Open File</MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton>Open menu</MenuButton>
        <Portal>
          <MenuList>
            <MenuItem>Menu 1</MenuItem>
            <MenuItem>New Window</MenuItem>
            <MenuItem>Open Closed Tab</MenuItem>
            <MenuItem>Open File</MenuItem>
          </MenuList>
        </Portal>
      </Menu>
      <Menu>
        <MenuButton as={Button} colorScheme="pink">
          Profile
        </MenuButton>
        <MenuList>
          <MenuGroup title="Profile">
            <MenuItem>My Account</MenuItem>
            <MenuItem>Payments </MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="Help">
            <MenuItem>Docs</MenuItem>
            <MenuItem>FAQ</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
      <Menu closeOnSelect={false}>
        <MenuButton as={Button} colorScheme="blue">
          MenuItem
        </MenuButton>
        <MenuList minWidth="240px">
          <MenuOptionGroup defaultValue="asc" title="Order" type="radio">
            <MenuItemOption value="asc">Ascending</MenuItemOption>
            <MenuItemOption value="desc">Descending</MenuItemOption>
          </MenuOptionGroup>
          <MenuDivider />
          <MenuOptionGroup title="Country" type="checkbox">
            <MenuItemOption value="email">Email</MenuItemOption>
            <MenuItemOption value="phone">Phone</MenuItemOption>
            <MenuItemOption value="country">Country</MenuItemOption>
          </MenuOptionGroup>
        </MenuList>
      </Menu>
      <>
        <Button onClick={onOpen8}>Open Modal</Button>

        <Modal isOpen={isOpen8} onClose={onClose8}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>
                asdklfj asdlk fjasdklfjklasdj fklsad jflkasd jfklasd jfklasd
                fjklas;djf afsdklj faskljdfjklasd fklkaj sdf
              </Text>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose8}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
      <>
        <Box ref={finalRef} tabIndex={-1} aria-label="Focus moved to this box">
          Some other content that'll receive focus on close.
        </Box>

        <Button mt={4} onClick={onOpen9}>
          Open Modal 9
        </Button>
        <Modal finalFocusRef={finalRef} isOpen={isOpen9} onClose={onClose9}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>
                asdklfj asdlk fjasdklfjklasdj fklsad jflkasd jfklasd jfklasd
                fjklas;djf afsdklj faskljdfjklasd fklkaj sdf
              </Text>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose9}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
      <>
        <Button onClick={onOpen10}>Open Modal 10</Button>
        <Button ml={4} ref={finalRef10}>
          I'll receive focus on close
        </Button>

        <Modal
          initialFocusRef={initialRef10}
          finalFocusRef={finalRef10}
          isOpen={isOpen10}
          onClose={onClose10}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>First name</FormLabel>
                <Input ref={initialRef10} placeholder="First name" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Last name</FormLabel>
                <Input placeholder="Last name" />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3}>
                Save
              </Button>
              <Button onClick={onClose10}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
      <>
        <Button onClick={onOpen11}>Open Modal 11</Button>
        <Modal
          isCentered
          onClose={onClose11}
          isOpen={isOpen11}
          motionPreset="slideInBottom"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>
                asdklfj asdlk fjasdklfjklasdj fklsad jflkasd jfklasd jfklasd
                fjklas;djf afsdklj faskljdfjklasd fklkaj sdf
              </Text>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose11}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
      <>
        <RadioGroup
          value={scrollBehavior}
          onChange={(val) =>
            setScrollBehavior(val as ModalProps["scrollBehavior"])
          }
        >
          <Stack direction="row">
            <Radio value="inside">inside</Radio>
            <Radio value="outside">outside</Radio>
          </Stack>
        </RadioGroup>

        <Button mt={3} ref={btnRef12} onClick={onOpen12}>
          Trigger modal
        </Button>

        <Modal
          onClose={onClose12}
          finalFocusRef={btnRef12}
          isOpen={isOpen12}
          scrollBehavior={scrollBehavior}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>
                asdklfj asdlk fjasdklfjklasdj fklsad jflkasd jfklasd jfklasd
                fjklas;djf afsdklj faskljdfjklasd fklkaj sdf asdklfj asdlk
                fjasdklfjklasdj fklsad jflkasd jfklasd jfklasd fjklas;djf
                afsdklj faskljdfjklasd fklkaj sdf asdklfj asdlk fjasdklfjklasdj
                fklsad jflkasd jfklasd jfklasd fjklas;djf afsdklj faskljdfjklasd
                fklkaj sdfasdklfj asdlk fjasdklfjklasdj fklsad jflkasd jfklasd
                jfklasd fjklas;djf afsdklj faskljdfjklasd fklkaj sdf asdklfj
                asdlk fjasdklfjklasdj fklsad jflkasd jfklasd jfklasd fjklas;djf
                afsdklj faskljdfjklasd fklkaj sdf asdklfj asdlk fjasdklfjklasdj
                fklsad jflkasd jfklasd jfklasd fjklas;djf afsdklj faskljdfjklasd
                fklkaj sdf asdklfj asdlk fjasdklfjklasdj fklsad jflkasd jfklasd
                jfklasd fjklas;djf afsdklj faskljdfjklasd fklkaj sdf asdklfj
                asdlk fjasdklfjklasdj fklsad jflkasd jfklasd jfklasd fjklas;djf
                afsdklj faskljdfjklasd fklkaj sdf asdklfj asdlk fjasdklfjklasdj
                fklsad jflkasd jfklasd jfklasd fjklas;djf afsdklj faskljdfjklasd
                fklkaj sdf asdklfj asdlk fjasdklfjklasdj fklsad jflkasd jfklasd
                jfklasd fjklas;djf afsdklj faskljdfjklasd fklkaj sdf asdklfj
                asdlk fjasdklfjklasdj fklsad jflkasd jfklasd jfklasd fjklas;djf
                afsdklj faskljdfjklasd fklkaj sdf asdklfj asdlk fjasdklfjklasdj
                fklsad jflkasd jfklasd jfklasd fjklas;djf afsdklj faskljdfjklasd
                fklkaj sdf asdklfj asdlk fjasdklfjklasdj fklsad jflkasd jfklasd
                jfklasd fjklas;djf afsdklj faskljdfjklasd fklkaj sdf asdklfj
                asdlk fjasdklfjklasdj fklsad jflkasd jfklasd jfklasd fjklas;djf
                afsdklj faskljdfjklasd fklkaj sdf asdklfj asdlk fjasdklfjklasdj
                fklsad jflkasd jfklasd jfklasd fjklas;djf afsdklj faskljdfjklasd
                fklkaj sdf asdklfj asdlk fjasdklfjklasdj fklsad jflkasd jfklasd
                jfklasd fjklas;djf afsdklj faskljdfjklasd fklkaj sdf asdklfj
                asdlk fjasdklfjklasdj fklsad jflkasd jfklasd jfklasd fjklas;djf
                afsdklj faskljdfjklasd fklkaj sdf asdklfj asdlk fjasdklfjklasdj
                fklsad jflkasd jfklasd jfklasd fjklas;djf afsdklj faskljdfjklasd
                fklkaj sdfasdklfj asdlk fjasdklfjklasdj fklsad jflkasd jfklasd
                jfklasd fjklas;djf afsdklj faskljdfjklasd fklkaj sdf asdklfj
                asdlk fjasdklfjklasdj fklsad jflkasd jfklasd jfklasd fjklas;djf
                afsdklj faskljdfjklasd fklkaj sdf asdklfj asdlk fjasdklfjklasdj
                fklsad jflkasd jfklasd jfklasd fjklas;djf afsdklj faskljdfjklasd
                fklkaj sdf asdklfj asdlk fjasdklfjklasdj fklsad jflkasd jfklasd
                jfklasd fjklas;djf afsdklj faskljdfjklasd fklkaj sdf asdklfj
                asdlk fjasdklfjklasdj fklsad jflkasd jfklasd jfklasd fjklas;djf
                afsdklj faskljdfjklasd fklkaj sdf asdklfj asdlk fjasdklfjklasdj
                fklsad jflkasd jfklasd jfklasd fjklas;djf afsdklj faskljdfjklasd
                fklkaj sdf asdklfj asdlk fjasdklfjklasdj fklsad jflkasd jfklasd
                jfklasd fjklas;djf afsdklj faskljdfjklasd fklkaj sdf asdklfj
                asdlk fjasdklfjklasdj fklsad jflkasd jfklasd jfklasd fjklas;djf
                afsdklj faskljdfjklasd fklkaj sdf asdklfj asdlk fjasdklfjklasdj
                fklsad jflkasd jfklasd jfklasd fjklas;djf afsdklj faskljdfjklasd
                fklkaj sdf asdklfj asdlk fjasdklfjklasdj fklsad jflkasd jfklasd
                jfklasd fjklas;djf afsdklj faskljdfjklasd fklkaj sdf asdklfj
                asdlk fjasdklfjklasdj fklsad jflkasd jfklasd jfklasd fjklas;djf
                afsdklj faskljdfjklasd fklkaj sdf asdklfj asdlk fjasdklfjklasdj
                fklsad jflkasd jfklasd jfklasd fjklas;djf afsdklj faskljdfjklasd
                fklkaj sdf
              </Text>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose12}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
      <>
        {sizes2.map((size) => (
          <Button
            onClick={() => handleSizeClick(size)}
            key={size}
            m={4}
          >{`Open ${size} Modal`}</Button>
        ))}

        <Modal onClose={onClose13} size={size2} isOpen={isOpen13}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>
                asdklfj asdlk fjasdklfjklasdj fklsad jflkasd jfklasd jfklasd
                fjklas;djf afsdklj faskljdfjklasd fklkaj sdf
              </Text>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose13}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
      <Popover>
        <PopoverTrigger>
          <Button>Trigger</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Confirmation!</PopoverHeader>
          <PopoverBody>
            Are you sure you want to have that milkshake?
          </PopoverBody>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger>
          <Button>Trigger</Button>
        </PopoverTrigger>
        <Portal>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader>Header</PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
              <Button colorScheme="blue">Button</Button>
            </PopoverBody>
            <PopoverFooter>This is the footer</PopoverFooter>
          </PopoverContent>
        </Portal>
      </Popover>
      <Popover
        isOpen={isEditing}
        onOpen={setIsEditing.on}
        onClose={setIsEditing.off}
        closeOnBlur={false}
        isLazy
        lazyBehavior="keepMounted"
      >
        <HStack>
          <PopoverAnchor>
            <Input
              color={color}
              w="auto"
              display="inline-flex"
              isDisabled={!isEditing}
              defaultValue="Popover Anchor"
            />
          </PopoverAnchor>

          <PopoverTrigger>
            <Button h="40px" colorScheme="pink">
              {isEditing ? "Save" : "Edit"}
            </Button>
          </PopoverTrigger>
        </HStack>

        <PopoverContent>
          <PopoverBody>
            Colors:
            <RadioGroup
              value={color}
              onChange={(newColor) => setColor(newColor)}
            >
              <Radio value="red">red</Radio>
              <Radio value="blue">blue</Radio>
              <Radio value="green">green</Radio>
              <Radio value="purple">purple</Radio>
            </RadioGroup>
          </PopoverBody>
        </PopoverContent>
      </Popover>
      <Popover closeOnBlur={false} placement="left" initialFocusRef={initRef}>
        {({ isOpen, onClose }) => (
          <>
            <PopoverTrigger>
              <Button>Click to {isOpen ? "close" : "open"}</Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent>
                <PopoverHeader>This is the header</PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody>
                  <Box>
                    Hello. Nice to meet you! This is the body of the popover
                  </Box>
                  <Button
                    mt={4}
                    colorScheme="blue"
                    onClick={onClose}
                    ref={initRef}
                  >
                    Close
                  </Button>
                </PopoverBody>
                <PopoverFooter>This is the footer</PopoverFooter>
              </PopoverContent>
            </Portal>
          </>
        )}
      </Popover>
      <Popover>
        <PopoverTrigger>
          <Box
            tabIndex={0}
            role="button"
            aria-label="Some box"
            p={5}
            w="120px"
            bg="gray.300"
            children="Click"
          />
        </PopoverTrigger>
        <PopoverContent bg="tomato" color="white">
          <PopoverHeader fontWeight="semibold">Customization</PopoverHeader>
          <PopoverArrow bg="pink.500" />
          <PopoverCloseButton bg="purple.500" />
          <PopoverBody>
            Tadaa!! The arrow color and background color is customized. Check
            the props for each component.
          </PopoverBody>
        </PopoverContent>
      </Popover>
      <Popover placement="top-start">
        <PopoverTrigger>
          <Button>Click me</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader fontWeight="semibold">Popover placement</PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </PopoverBody>
        </PopoverContent>
      </Popover>
      <Tooltip label="Hey, I'm here!" aria-label="A tooltip">
        Hover me
      </Tooltip>
      <Tooltip label="Phone number" fontSize="md">
        <PhoneIcon />
      </Tooltip>
      <Tooltip hasArrow label="Search places" bg="gray.300" color="black">
        <SearchIcon />
      </Tooltip>
      <Tooltip hasArrow label="Search places" bg="red.600">
        <Button>Button</Button>
      </Tooltip>
      <Tooltip isDisabled>
        <SearchIcon />
      </Tooltip>
      <VStack spacing={6}>
        <HStack spacing={6}>
          <Tooltip label="Auto start" placement="auto-start">
            <Button>Auto-Start</Button>
          </Tooltip>

          <Tooltip label="Auto" placement="auto">
            <Button>Auto</Button>
          </Tooltip>

          <Tooltip label="Auto end" placement="auto-end">
            <Button>Auto-End</Button>
          </Tooltip>
        </HStack>

        <HStack spacing={6}>
          <Tooltip label="Top start" placement="top-start">
            <Button>Top-Start</Button>
          </Tooltip>

          <Tooltip label="Top" placement="top">
            <Button>Top</Button>
          </Tooltip>

          <Tooltip label="Top end" placement="top-end">
            <Button>Top-End</Button>
          </Tooltip>
        </HStack>

        <HStack spacing={6}>
          <Tooltip label="Right start" placement="right-start">
            <Button>Right-Start</Button>
          </Tooltip>

          <Tooltip label="Right" placement="right">
            <Button>Right</Button>
          </Tooltip>

          <Tooltip label="Right end" placement="right-end">
            <Button>Right-End</Button>
          </Tooltip>
        </HStack>

        <HStack spacing={6}>
          <Tooltip label="Bottom start" placement="bottom-start">
            <Button>Bottom Start</Button>
          </Tooltip>

          <Tooltip label="Bottom" placement="bottom">
            <Button>Bottom</Button>
          </Tooltip>

          <Tooltip label="Bottom end" placement="bottom-end">
            <Button>Bottom End</Button>
          </Tooltip>
        </HStack>

        <HStack spacing={6}>
          <Tooltip label="Left start" placement="left-start">
            <Button>Left-Start</Button>
          </Tooltip>

          <Tooltip label="Left" placement="left">
            <Button>Left</Button>
          </Tooltip>

          <Tooltip label="Left end" placement="left-end">
            <Button>Left-End</Button>
          </Tooltip>
        </HStack>
      </VStack>
      <Wrap spacing={6}>
        <WrapItem>
          <Tooltip label="I close on click">
            <Button>Close on Click - true(default)</Button>
          </Tooltip>
        </WrapItem>

        <WrapItem>
          <Tooltip label="I don't close on click" closeOnClick={false}>
            <Button>Close on Click - false</Button>
          </Tooltip>
        </WrapItem>

        <WrapItem>
          <Tooltip label="I am always open" placement="top" isOpen>
            <Button>Always Open</Button>
          </Tooltip>
        </WrapItem>

        <WrapItem>
          <Tooltip label="I am open by default" placement="left" defaultIsOpen>
            <Button>Open on startup</Button>
          </Tooltip>
        </WrapItem>

        <WrapItem>
          <Tooltip label="Opened after 500ms" openDelay={500}>
            <Button>Delay Open - 500ms</Button>
          </Tooltip>
        </WrapItem>

        <WrapItem>
          <Tooltip label="Closed after 500ms" closeDelay={500}>
            <Button>Delay Close - 500ms</Button>
          </Tooltip>
        </WrapItem>

        <WrapItem>
          <Tooltip label="I have 15px arrow" hasArrow arrowSize={15}>
            <Button>Arrow size - 15px</Button>
          </Tooltip>
        </WrapItem>
      </Wrap>
    </div>
  );
};

export default ChakraOverlay;
