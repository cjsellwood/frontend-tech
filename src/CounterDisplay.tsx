import { Heading, Text } from "@chakra-ui/react";
import React from "react";

interface propTypes {
  count: number;
}

const CounterDisplay = ({ count }: propTypes) => {
  return (
    <div>
      <Heading as="h3" size="md">
        The value is:
      </Heading>
      <Text textAlign="center">{count}</Text>
    </div>
  );
};

export default CounterDisplay;
