/* eslint-disable jsx-a11y/aria-proptypes */
import React from "react";
import {
  Box,
  HStack,
  Flex,
  Text,
  Button,
  ButtonGroup,
  Stack,
  IconButton,
  Checkbox,
  CheckboxGroup,
  Editable,
  EditableInput,
  EditablePreview,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Radio,
  RadioGroup,
  Select,
  NumberInput,
  NumberInputStepper,
  NumberInputField,
  NumberIncrementStepper,
  NumberDecrementStepper,
  InputLeftElement,
  InputRightElement,
  Slider,
  SliderFilledTrack,
  SliderTrack,
  SliderThumb,
  SliderMark,
  Tooltip,
  PinInput,
  PinInputField,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Switch,
  Textarea,
} from "@chakra-ui/react";
import {
  PhoneIcon,
  EmailIcon,
  ArrowForwardIcon,
  AddIcon,
  SearchIcon,
  CheckIcon,
} from "@chakra-ui/icons";
import { ChangeEvent, useState } from "react";

const ChakraInputs = () => {
  const [input, setInput] = useState("");
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);

  const isError = input === "";

  const [value, setValue] = useState("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  const format = (val: string) => `$` + val;
  const parse = (val: string) => val.replace(/^\$/, "");

  const [value2, setValue2] = useState("1.53");

  const [value3, setValue3] = useState(0);
  const handleChange2 = (value: string | number) => setValue3(Number(value));

  const [value4, setValue4] = useState("1");

  const [sliderValue, setSliderValue] = useState(50);

  const [sliderValue2, setSliderValue2] = useState(5);
  const [showTooltip, setShowTooltip] = useState(false);

  let [value5, setValue5] = useState("");

  let handleInputChange2 = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let inputValue = e.target.value;
    setValue5(inputValue);
  };

  return (
    <div>
      <Button colorScheme="blue">Button</Button>
      <Stack spacing={4} direction="row" align="center">
        <Button colorScheme="teal" size="xs">
          Button
        </Button>
        <Button colorScheme="teal" size="sm">
          Button
        </Button>
        <Button colorScheme="teal" size="md">
          Button
        </Button>
        <Button colorScheme="teal" size="lg">
          Button
        </Button>
      </Stack>
      <Stack direction="row" spacing={4} align="center">
        <Button colorScheme="teal" variant="solid">
          Button
        </Button>
        <Button colorScheme="teal" variant="outline">
          Button
        </Button>
        <Button colorScheme="teal" variant="ghost">
          Button
        </Button>
        <Button colorScheme="teal" variant="link">
          Button
        </Button>
      </Stack>
      <Stack direction="row" spacing={4}>
        <Button leftIcon={<EmailIcon />} colorScheme="teal" variant="solid">
          Email
        </Button>
        <Button
          rightIcon={<ArrowForwardIcon />}
          colorScheme="teal"
          variant="outline"
        >
          Call us
        </Button>
      </Stack>
      <Stack direction="row" spacing={4}>
        <Button isLoading colorScheme="teal" variant="solid">
          Email
        </Button>
        <Button
          isLoading
          loadingText="Submitting"
          colorScheme="teal"
          variant="outline"
        >
          Submit
        </Button>
      </Stack>
      <Stack direction="row" spacing={4} align="center">
        <Button
          isLoading
          loadingText="Loading"
          colorScheme="teal"
          variant="outline"
          spinnerPlacement="start"
        >
          Submit
        </Button>
        <Button
          isLoading
          loadingText="Loading"
          colorScheme="teal"
          variant="outline"
          spinnerPlacement="end"
        >
          Continue
        </Button>
      </Stack>
      <ButtonGroup variant="outline" spacing="6">
        <Button colorScheme="blue">Save</Button>
        <Button>Cancel</Button>
      </ButtonGroup>
      <ButtonGroup size="sm" isAttached variant="outline">
        <Button mr="-px">Save</Button>
        <IconButton aria-label="Add to friends" icon={<AddIcon />} />
      </ButtonGroup>
      <Button
        size="md"
        height="48px"
        width="200px"
        border="2px"
        borderColor="green.500"
      >
        Button
      </Button>
      <Box
        as="button"
        height="24px"
        lineHeight="1.2"
        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
        border="1px"
        px="8px"
        borderRadius="2px"
        fontSize="14px"
        fontWeight="semibold"
        bg="#f5f6f7"
        borderColor="#ccd0d5"
        color="#4b4f56"
        _hover={{ bg: "#ebedf0" }}
        _active={{
          bg: "#dddfe2",
          transform: "scale(0.98)",
          borderColor: "#bec3c9",
        }}
        _focus={{
          boxShadow:
            "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
        }}
      >
        Join Group
      </Box>
      <Checkbox defaultIsChecked>Checkbox</Checkbox>
      <Stack spacing={5} direction="row">
        <Checkbox isDisabled>Checkbox</Checkbox>
        <Checkbox isDisabled defaultIsChecked>
          Checkbox
        </Checkbox>
      </Stack>
      <Stack spacing={5} direction="row">
        <Checkbox colorScheme="red" defaultIsChecked>
          Checkbox
        </Checkbox>
        <Checkbox colorScheme="green" defaultIsChecked>
          Checkbox
        </Checkbox>
      </Stack>
      <Stack spacing={[1, 5]} direction={["column", "row"]}>
        <Checkbox size="sm" colorScheme="red">
          Checkbox
        </Checkbox>
        <Checkbox size="md" colorScheme="green" defaultIsChecked>
          Checkbox
        </Checkbox>
        <Checkbox size="lg" colorScheme="orange" defaultIsChecked>
          Checkbox
        </Checkbox>
      </Stack>
      <Checkbox isInvalid>Checkbox</Checkbox>
      <Checkbox spacing="1rem">Option</Checkbox>
      <Checkbox iconColor="blue.100" iconSize="1rem">
        Option
      </Checkbox>
      <CheckboxGroup colorScheme="green" defaultValue={["naruto", "kakashi"]}>
        <Stack spacing={[1, 5]} direction={["column", "row"]}>
          <Checkbox value="naruto">Naruto</Checkbox>
          <Checkbox value="sasuke">Sasuke</Checkbox>
          <Checkbox value="kakashi">kakashi</Checkbox>
        </Stack>
      </CheckboxGroup>
      <Editable defaultValue="Take some chakra">
        <EditablePreview />
        <EditableInput />
      </Editable>
      <FormControl>
        <FormLabel htmlFor="email2">Email address</FormLabel>
        <Input id="email2" type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
      <FormControl as="fieldset">
        <FormLabel as="legend">Favorite Naruto Character</FormLabel>
        <RadioGroup defaultValue="Itachi">
          <HStack spacing="24px">
            <Radio value="Sasuke">Sasuke</Radio>
            <Radio value="Nagato">Nagato</Radio>
            <Radio value="Itachi">Itachi</Radio>
            <Radio value="Sage of the six Paths">Sage of the six Paths</Radio>
          </HStack>
        </RadioGroup>
        <FormHelperText>Select only if you're a fan.</FormHelperText>
      </FormControl>
      <FormControl isInvalid={isError}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          id="email"
          type="email"
          value={input}
          onChange={handleInputChange}
        />
        {!isError ? (
          <FormHelperText>
            Enter the email you'd like to receive the newsletter on.
          </FormHelperText>
        ) : (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isRequired>
        <FormLabel htmlFor="first-name">First name</FormLabel>
        <Input id="first-name" placeholder="First name" />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="country">Country</FormLabel>
        <Select id="country" placeholder="Select country">
          <option>United Arab Emirates</option>
          <option>Nigeria</option>
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="amount">Amount</FormLabel>
        <NumberInput max={50} min={10}>
          <NumberInputField id="amount" />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      <IconButton aria-label="Search database" icon={<SearchIcon />} />
      <IconButton
        colorScheme="blue"
        aria-label="Search database"
        icon={<SearchIcon />}
      />
      <IconButton
        colorScheme="teal"
        aria-label="Call Segun"
        size="lg"
        icon={<PhoneIcon />}
      />
      <IconButton
        variant="outline"
        colorScheme="teal"
        aria-label="Send email"
        icon={<EmailIcon />}
      />
      <Input placeholder="Basic usage" />
      <Stack spacing={3}>
        <Input placeholder="extra small size" size="xs" />
        <Input placeholder="small size" size="sm" />
        <Input placeholder="medium size" size="md" />
        <Input placeholder="large size" size="lg" />
      </Stack>
      <Input htmlSize={4} width="auto" />
      <Stack spacing={3}>
        <Input variant="outline" placeholder="Outline" />
        <Input variant="filled" placeholder="Filled" />
        <Input variant="flushed" placeholder="Flushed" />
        <Input variant="unstyled" placeholder="Unstyled" />
      </Stack>
      <Stack spacing={4}>
        <InputGroup>
          <InputLeftAddon children="+234" />
          <Input type="tel" placeholder="phone number" />
        </InputGroup>
        <InputGroup size="sm">
          <InputLeftAddon children="https://" />
          <Input placeholder="mysite" />
          <InputRightAddon children=".com" />
        </InputGroup>
      </Stack>
      <Stack spacing={4}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<PhoneIcon color="gray.300" />}
          />
          <Input type="tel" placeholder="Phone number" />
        </InputGroup>

        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
            children="$"
          />
          <Input placeholder="Enter amount" />
          <InputRightElement children={<CheckIcon color="green.500" />} />
        </InputGroup>
      </Stack>
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          type={show ? "text" : "password"}
          placeholder="Enter password"
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
      <>
        <Text mb="8px">Value: {value}</Text>
        <Input
          value={value}
          onChange={handleChange}
          placeholder="Here is a sample placeholder"
          size="sm"
        />
      </>
      <Stack spacing={3}>
        <Input
          focusBorderColor="lime"
          placeholder="Here is a sample placeholder"
        />
        <Input
          focusBorderColor="pink.400"
          placeholder="Here is a sample placeholder"
        />
        <Input
          isInvalid
          errorBorderColor="red.300"
          placeholder="Here is a sample placeholder"
        />
        <Input
          isInvalid
          errorBorderColor="crimson"
          placeholder="Here is a sample placeholder"
        />
      </Stack>
      <NumberInput defaultValue={15} min={10} max={20}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <NumberInput step={5} defaultValue={15} min={10} max={30}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <NumberInput defaultValue={15} precision={2} step={0.2}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <NumberInput defaultValue={15} max={30} clampValueOnBlur={false}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <NumberInput
        defaultValue={15}
        max={10}
        keepWithinRange={false}
        clampValueOnBlur={false}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <NumberInput
        onChange={(valueString) => setValue2(parse(valueString))}
        value={format(value2)}
        max={50}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Stack shouldWrapChildren direction="row">
        <NumberInput size="xs" maxW={16} defaultValue={15} min={10}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>

        <NumberInput size="sm" maxW={20} defaultValue={15} min={10}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>

        <NumberInput size="md" maxW={24} defaultValue={15} min={10}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>

        <NumberInput size="lg" maxW={32} defaultValue={15} min={10}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Stack>
      <NumberInput size="sm" defaultValue={15} min={10}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper
            bg="green.200"
            _active={{ bg: "green.300" }}
            children="+"
          />
          <NumberDecrementStepper
            bg="pink.200"
            _active={{ bg: "pink.300" }}
            children="-"
          />
        </NumberInputStepper>
      </NumberInput>
      <Flex>
        <NumberInput
          maxW="100px"
          mr="2rem"
          value={value3}
          onChange={handleChange2}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Slider
          flex="1"
          focusThumbOnChange={false}
          value={value3}
          onChange={handleChange2}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb fontSize="sm" boxSize="32px" children={value} />
        </Slider>
      </Flex>
      <NumberInput allowMouseWheel>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <HStack>
        <PinInput>
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
      <HStack>
        <PinInput type="alphanumeric">
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
      <PinInput otp>
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
      <HStack>
        <PinInput type="alphanumeric" mask>
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
      <Stack>
        <HStack>
          <PinInput size="xs">
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </HStack>

        <HStack>
          <PinInput size="sm">
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </HStack>

        <HStack>
          <PinInput size="md">
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </HStack>

        <HStack>
          <PinInput size="lg">
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </HStack>
      </Stack>
      <HStack>
        <PinInput defaultValue="234">
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
      <HStack>
        <PinInput placeholder="🥳">
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
      <HStack>
        <PinInput manageFocus={false}>
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
      <RadioGroup onChange={setValue4} value={value4}>
        <Stack direction="row">
          <Radio value="1">First</Radio>
          <Radio value="2">Second</Radio>
          <Radio value="3">Third</Radio>
        </Stack>
      </RadioGroup>
      <RadioGroup defaultValue="2">
        <Stack spacing={5} direction="row">
          <Radio colorScheme="red" value="1">
            Radio
          </Radio>
          <Radio colorScheme="green" value="2">
            Radio
          </Radio>
        </Stack>
      </RadioGroup>
      <Stack>
        <Radio size="sm" name="1" colorScheme="red">
          Radio
        </Radio>
        <Radio size="md" name="1" colorScheme="green">
          Radio
        </Radio>
        <Radio size="lg" name="1" colorScheme="orange" defaultChecked>
          Radio
        </Radio>
      </Stack>
      <RadioGroup defaultValue="1">
        <Stack>
          <Radio value="1" isDisabled>
            Checked
          </Radio>
          <Radio value="2">Unchecked</Radio>
          <Radio value="3">Unchecked</Radio>
        </Stack>
      </RadioGroup>
      <RadioGroup defaultValue="1">
        <Stack spacing={4} direction="row">
          <Radio value="1" isDisabled>
            Radio 1
          </Radio>
          <Radio value="2">Radio 2</Radio>
          <Radio value="3">Radio 3</Radio>
        </Stack>
      </RadioGroup>
      <Radio isInvalid>Radio</Radio>
      <RangeSlider aria-label={["min", "max"]} defaultValue={[10, 30]}>
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
      <RangeSlider
        aria-label={["min", "max"]}
        colorScheme="pink"
        defaultValue={[10, 30]}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
      <RangeSlider
        aria-label={["min", "max"]}
        colorScheme="pink"
        defaultValue={[10, 30]}
        orientation="vertical"
        minH="32"
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
      <RangeSlider defaultValue={[120, 240]} min={0} max={300} step={30}>
        <RangeSliderTrack bg="red.100">
          <RangeSliderFilledTrack bg="tomato" />
        </RangeSliderTrack>
        <RangeSliderThumb boxSize={6} index={0} />
        <RangeSliderThumb boxSize={6} index={1} />
      </RangeSlider>
      <RangeSlider
        aria-label={["min", "max"]}
        onChangeEnd={(val) => console.log(val)}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
      <Select placeholder="Select option">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
      <Stack spacing={3}>
        <Select placeholder="extra small size" size="xs" />
        <Select placeholder="small size" size="sm" />
        <Select placeholder="medium size" size="md" />
        <Select placeholder="large size" size="lg" />
      </Stack>
      <Stack spacing={3}>
        <Select variant="outline" placeholder="Outline" />
        <Select variant="filled" placeholder="Filled" />
        <Select variant="flushed" placeholder="Flushed" />
        <Select variant="unstyled" placeholder="Unstyled" />
      </Stack>
      <Select icon={<CheckIcon />} placeholder="Woohoo! A new icon" />
      <Select
        bg="tomato"
        borderColor="tomato"
        color="white"
        placeholder="Woohoo! A new background color!"
      />
      <Slider aria-label="slider-ex-1" defaultValue={30}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <Slider aria-label="slider-ex-2" colorScheme="pink" defaultValue={30}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <Slider
        aria-label="slider-ex-3"
        defaultValue={30}
        orientation="vertical"
        minH="32"
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <Slider defaultValue={60} min={0} max={300} step={30}>
        <SliderTrack bg="red.100">
          <Box position="relative" right={10} />
          <SliderFilledTrack bg="tomato" />
        </SliderTrack>
        <SliderThumb boxSize={6} />
      </Slider>
      <Slider aria-label="slider-ex-6" onChange={(val) => setSliderValue(val)}>
        <SliderMark value={25} mt="1" ml="-2.5" fontSize="sm">
          25%
        </SliderMark>
        <SliderMark value={50} mt="1" ml="-2.5" fontSize="sm">
          50%
        </SliderMark>
        <SliderMark value={75} mt="1" ml="-2.5" fontSize="sm">
          75%
        </SliderMark>
        <SliderMark
          value={sliderValue}
          textAlign="center"
          bg="blue.500"
          color="white"
          mt="-10"
          ml="-5"
          w="12"
        >
          {sliderValue}%
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <Slider
        id="slider"
        defaultValue={5}
        min={0}
        max={100}
        colorScheme="teal"
        onChange={(v) => setSliderValue2(v)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <SliderMark value={25} mt="1" ml="-2.5" fontSize="sm">
          25%
        </SliderMark>
        <SliderMark value={50} mt="1" ml="-2.5" fontSize="sm">
          50%
        </SliderMark>
        <SliderMark value={75} mt="1" ml="-2.5" fontSize="sm">
          75%
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <Tooltip
          hasArrow
          bg="teal.500"
          color="white"
          placement="top"
          isOpen={showTooltip}
          label={`${sliderValue2}%`}
        >
          <SliderThumb />
        </Tooltip>
      </Slider>
      <Slider aria-label="slider-ex-5" onChangeEnd={(val) => console.log(val)}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="email-alerts" mb="0">
          Enable email alerts?
        </FormLabel>
        <Switch id="email-alerts" />
      </FormControl>
      <Stack align="center" direction="row">
        <Switch size="sm" />
        <Switch size="md" />
        <Switch size="lg" />
      </Stack>
      <Stack direction="row">
        <Switch colorScheme="red" />
        <Switch colorScheme="teal" size="lg" />
      </Stack>
      <Textarea placeholder="Here is a sample placeholder" />
      <>
        <Text mb="8px">Value: {value5}</Text>
        <Textarea
          value={value5}
          onChange={handleInputChange2}
          placeholder="Here is a sample placeholder"
          size="sm"
        />
      </>
      <Textarea isDisabled placeholder="Here is a sample placeholder" />
      <Textarea isInvalid placeholder="Here is a sample placeholder" />
    </div>
  );
};

export default ChakraInputs;
