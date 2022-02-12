import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "./hooks";
import { increment, decrement } from "./store/counterSlice";
import { useEffect } from "react";
import { fetchTodo, completeTodo, undoTodo } from "./store/todoSlice";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import CounterDisplay from "./CounterDisplay";

const ReduxExample = () => {
  const count = useAppSelector((state) => state.counter.value);
  const data = useAppSelector((state) => state.todo.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  return (
    <Box>
      <Flex alignItems="center" gap="5" direction="column">
        <Button
          aria-label="Increment value"
          bg="green.600"
          color="white"
          variant="solid"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <CounterDisplay count={count}/>
        <Button
          aria-label="Decrement value"
          bg="red.600"
          color="white"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
      </Flex>
      {data.map((todo, i) => (
        <Box key={todo.id} p="2">
          <Heading>{todo.title}</Heading>
          <Text>
            {todo.id}{" "}
            {todo.completed ? (
              <Button
                aria-label="undo todo"
                ml="5"
                cursor="pointer"
                onClick={() => dispatch(undoTodo(i))}
              >
                <CheckIcon w="10" h="10" color="green.500" bg="gray.600" />
              </Button>
            ) : (
              <Button
                aria-label="complete todo"
                ml="5"
                cursor="pointer"
                onClick={() => dispatch(completeTodo(i))}
              >
                <CloseIcon w="10" h="10" color="red.500" bg="gray.600" />
              </Button>
            )}
          </Text>
        </Box>
      ))}
    </Box>
  );
};

export default ReduxExample;
