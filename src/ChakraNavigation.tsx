import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  // BreadcrumbSeparator,
  Link as ChakraLink,
  Text,
  LinkBox,
  LinkOverlay,
  Box,
  Heading,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { ChevronRightIcon, ExternalLinkIcon } from "@chakra-ui/icons";

const ChakraNavigation = () => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">Docs</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Breadcrumb</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb separator="-">
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">About</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Contact</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb
        spacing="8px"
        separator={<ChevronRightIcon color="gray.500" />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">About</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Contact</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb fontWeight="medium" fontSize="sm">
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">About</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Current</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/">
            About
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>Contact</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <ChakraLink>Chakra UI</ChakraLink>
      <ChakraLink href="https://chakra-ui.com" isExternal>
        Chakra Design system <ExternalLinkIcon mx="2px" />
      </ChakraLink>
      <Text>
        Did you know that{" "}
        <ChakraLink as={Link} to="/" color="teal.500" href="#">
          links can live inline with text
        </ChakraLink>
      </Text>
      <LinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md">
        <Box as="time" dateTime="2021-01-15 15:30:00 +0000 UTC">
          13 days ago
        </Box>
        <Heading size="md" my="2">
          <LinkOverlay href="#">
            New Year, New Beginnings: Smashing Workshops & Audits
          </LinkOverlay>
        </Heading>
        <Text>
          Catch up on what’s been cookin’ at Smashing and explore some of the
          most popular community resources.
        </Text>
      </LinkBox>
      <LinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md">
        <Box as="time" dateTime="2021-01-15 15:30:00 +0000 UTC">
          13 days ago
        </Box>
        <Heading size="md" my="2">
          <LinkOverlay href="#">
            New Year, New Beginnings: Smashing Workshops & Audits
          </LinkOverlay>
        </Heading>
        <Text mb="3">
          Catch up on what’s been cookin’ at Smashing and explore some of the
          most popular community resources.
        </Text>
        <Box as="a" color="teal.400" href="#" fontWeight="bold">
          Some inner link
        </Box>
      </LinkBox>
      <LinkBox as="article">
        <h2>
          <Link to="/">
            <LinkOverlay>Some blog post</LinkOverlay>
          </Link>
        </h2>
        <p>
          As a side note, using quotation marks around an attribute value is
          required only if this value is not a valid identifier.
        </p>
        <a href="/about">Some inner link</a>
      </LinkBox>
    </div>
  );
};

export default ChakraNavigation;
