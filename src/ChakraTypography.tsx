import { Text, Stack, Heading, Box, Button } from "@chakra-ui/react";

const ChakraTypography = () => {
  return (
    <div>
      <Stack spacing={3}>
        <Text fontSize="6xl">(6xl) In love with React & Next</Text>
        <Text fontSize="5xl">(5xl) In love with React & Next</Text>
        <Text fontSize="4xl">(4xl) In love with React & Next</Text>
        <Text fontSize="3xl">(3xl) In love with React & Next</Text>
        <Text fontSize="2xl">(2xl) In love with React & Next</Text>
        <Text fontSize="xl">(xl) In love with React & Next</Text>
        <Text fontSize="lg">(lg) In love with React & Next</Text>
        <Text fontSize="md">(md) In love with React & Next</Text>
        <Text fontSize="sm">(sm) In love with React & Next</Text>
        <Text fontSize="xs">(xs) In love with React & Next</Text>
      </Stack>
      <Text color="gray.500" isTruncated>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups.
      </Text>
      <Text noOfLines={2}>
        "The quick brown fox jumps over the lazy dog" is an English-language
        pangram—a sentence that contains all of the letters of the English
        alphabet. Owing to its existence, Chakra was created.
      </Text>
      <Text noOfLines={[1, 2, 3]}>
        "The quick brown fox jumps over the lazy dog" is an English-language
        pangram—a sentence that contains all of the letters of the English
        alphabet. Owing to its existence, Chakra was created.
      </Text>
      <Text fontSize="50px" color="tomato">
        I'm using a custom font-size value for this text
      </Text>
      <>
        <Text as="i">Italic</Text>
        <br />
        <Text as="u">Underline</Text>
        <br />
        <Text as="abbr">I18N</Text>
        <br />
        <Text as="cite">Citation</Text>
        <br />
        <Text as="del">Deleted</Text>
        <br />
        <Text as="em">Emphasis</Text>
        <br />
        <Text as="ins">Inserted</Text>
        <br />
        <Text as="kbd">Ctrl + C</Text>
        <br />
        <Text as="mark">Highlighted</Text>
        <br />
        <Text as="s">Strikethrough</Text>
        <br />
        <Text as="samp">Sample</Text>
        <br />
        <Text as="sub">sub</Text>
        <br />
        <Text as="sup">sup</Text>
      </>
      <Heading>I'm a Heading</Heading>
      <Stack spacing={6}>
        <Heading as="h1" size="4xl" isTruncated>
          (4xl) In love with React & Next
        </Heading>
        <Heading as="h2" size="3xl" isTruncated>
          (3xl) In love with React & Next
        </Heading>
        <Heading as="h2" size="2xl">
          (2xl) In love with React & Next
        </Heading>
        <Heading as="h2" size="xl">
          (xl) In love with React & Next
        </Heading>
        <Heading as="h3" size="lg">
          (lg) In love with React & Next
        </Heading>
        <Heading as="h4" size="md">
          (md) In love with React & Next
        </Heading>
        <Heading as="h5" size="sm">
          (sm) In love with React & Next
        </Heading>
        <Heading as="h6" size="xs">
          (xs) In love with React & Next
        </Heading>
      </Stack>
      <Heading isTruncated>
        Basic text writing, including headings, body text, lists, and more.
      </Heading>
      <Heading size="lg" fontSize="50px">
        I'm overriding this heading
      </Heading>
      <Box maxW="32rem">
        <Heading mb={4}>Modern online and offline payments for Africa</Heading>
        <Text fontSize="xl">
          Paystack helps businesses in Africa get paid by anyone, anywhere in
          the world
        </Text>
        <Button size="lg" colorScheme="green" mt="24px">
          Create a free account
        </Button>
      </Box>
    </div>
  );
};

export default ChakraTypography;
