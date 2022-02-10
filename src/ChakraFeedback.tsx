import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  Stack,
  Box,
  CircularProgress,
  CircularProgressLabel,
  Progress,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Spinner,
  useToast,
  Button,
  ToastId,
  Wrap,
  WrapItem,
  AlertStatus,
  ToastPositionWithLogical,
} from "@chakra-ui/react";
import { useRef } from "react";

const ChakraFeedback = () => {
  const toast = useToast();

  const toastIdRef = useRef<ToastId>();

  function close() {
    if (toastIdRef.current) {
      toast.close(toastIdRef.current);
    }
  }

  function closeAll() {
    toast.closeAll();
  }

  function addToast() {
    toastIdRef.current = toast({ description: "some text" });
  }

  function update() {
    if (toastIdRef.current) {
      toast.update(toastIdRef.current, { description: "new text" });
    }
  }

  const statuses = ["success", "error", "warning", "info"] as AlertStatus[];
  const variants = ["solid", "subtle", "left-accent", "top-accent"];
  const positions = [
    "top",
    "top-right",
    "top-left",
    "bottom",
    "bottom-right",
    "bottom-left",
  ] as ToastPositionWithLogical[];
  const id = "test-toast";
  return (
    <div>
      <Alert status="error">
        <AlertIcon />
        <AlertTitle mr={2}>Your browser is outdated!</AlertTitle>
        <AlertDescription>
          Your Chakra experience may be degraded.
        </AlertDescription>
        <CloseButton position="absolute" right="8px" top="8px" />
      </Alert>
      <Stack spacing={3}>
        <Alert status="error">
          <AlertIcon />
          There was an error processing your request
        </Alert>

        <Alert status="success">
          <AlertIcon />
          Data uploaded to the server. Fire on!
        </Alert>

        <Alert status="warning">
          <AlertIcon />
          Seems your account is about expire, upgrade now
        </Alert>

        <Alert status="info">
          <AlertIcon />
          Chakra is going live on August 30th. Get ready!
        </Alert>
      </Stack>
      <Stack spacing={3}>
        <Alert status="success" variant="subtle">
          <AlertIcon />
          Data uploaded to the server. Fire on!
        </Alert>

        <Alert status="success" variant="solid">
          <AlertIcon />
          Data uploaded to the server. Fire on!
        </Alert>

        <Alert status="success" variant="left-accent">
          <AlertIcon />
          Data uploaded to the server. Fire on!
        </Alert>

        <Alert status="success" variant="top-accent">
          <AlertIcon />
          Data uploaded to the server. Fire on!
        </Alert>
      </Stack>
      <Stack p="3"></Stack>
      <Alert
        status="success"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          Application submitted!
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          Thanks for submitting your application. Our team will get back to you
          soon.
        </AlertDescription>
      </Alert>
      <Alert status="success" m="1">
        <AlertIcon />
        <Box flex="1">
          <AlertTitle>Success!</AlertTitle>
          <AlertDescription display="block">
            Your application has been received. We will review your application
            and respond within the next 48 hours.
          </AlertDescription>
        </Box>
        <CloseButton position="absolute" right="8px" top="8px" />
      </Alert>
      <CircularProgress value={80} />
      <CircularProgress value={30} size="120px" />
      <CircularProgress value={59} size="100px" thickness="4px" />
      <CircularProgress value={30} color="orange.400" thickness="12px" />
      <CircularProgress value={40} color="green.400">
        <CircularProgressLabel>40%</CircularProgressLabel>
      </CircularProgress>
      <CircularProgress
        isIndeterminate
        color="green.300"
        trackColor="purple.400"
      />
      <Progress value={80} />
      <Progress hasStripe value={64} />
      <Stack spacing={5}>
        <Progress colorScheme="green" size="sm" value={20} />
        <Progress colorScheme="green" size="md" value={20} />
        <Progress colorScheme="green" size="lg" value={20} />
        <Progress colorScheme="green" height="32px" value={20} />
      </Stack>
      <Progress value={20} size="lg" colorScheme="pink" />
      <Progress size="lg" isIndeterminate />
      <Stack>
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
      <Skeleton>
        <div>contents wrapped</div>
        <div>won't be visible</div>
      </Skeleton>
      <Box padding="6" boxShadow="lg" bg="white">
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
      </Box>
      <Skeleton startColor="pink.500" endColor="orange.500" height="20px" />
      <Skeleton isLoaded>
        <span>Chakra ui is cool</span>
      </Skeleton>
      <Spinner />
      <Spinner color="red.500" />
      <Stack direction="row" spacing={4}>
        <Spinner size="xs" />
        <Spinner size="sm" />
        <Spinner size="md" />
        <Spinner size="lg" />
        <Spinner
          size="xl"
          boxSize={500}
          speed="2s"
          thickness="50px"
          emptyColor="cyan"
          color="red"
        />
      </Stack>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
      <Button
        onClick={() =>
          toast({
            title: "Account created.",
            description: "We've created your account for you.",
            status: "success",
            duration: 9000,
            isClosable: true,
          })
        }
      >
        Show Toast
      </Button>
      <Button
        onClick={() =>
          toast({
            position: "bottom-left",
            render: () => (
              <Box color="white" p={3} bg="blue.500">
                Hello World
              </Box>
            ),
          })
        }
      >
        Show Toast
      </Button>
      <Stack isInline spacing={2}>
        <Button onClick={addToast} type="button">
          Toast
        </Button>
        <Button onClick={close} type="button" variant="outline">
          Close last toast
        </Button>
        <Button onClick={closeAll} type="button" variant="outline">
          Close all toasts
        </Button>
      </Stack>
      <Stack isInline spacing={2}>
        <Button onClick={addToast} type="button">
          Toast
        </Button>
        <Button onClick={update} type="button" variant="outline">
          Update last toast
        </Button>
      </Stack>
      <Wrap>
        {statuses.map((status, i) => {
          console.log(status);
          return (
            <WrapItem key={i}>
              <Button
                onClick={() =>
                  toast({
                    title: `${status} toast`,
                    status: status,
                    isClosable: true,
                  })
                }
              >
                Show {status} toast
              </Button>
            </WrapItem>
          );
        })}
      </Wrap>
      <Wrap>
        {variants.map((variant, i) => (
          <WrapItem key={i}>
            <Button
              onClick={() =>
                toast({
                  title: `${variant} toast`,
                  variant: variant,
                  isClosable: true,
                })
              }
            >
              Show {variant} toast
            </Button>
          </WrapItem>
        ))}
      </Wrap>
      <Button
        onClick={() => {
          toast({
            containerStyle: {
              border: "20px solid red",
            },
          });
        }}
      >
        Click me to show toast with custom container style.
      </Button>
      <Wrap>
        {positions.map((position, i) => (
          <WrapItem key={i}>
            <Button
              onClick={() =>
                toast({
                  title: `${position} toast`,
                  position: position,
                  isClosable: true,
                })
              }
            >
              Show {position} toast
            </Button>
          </WrapItem>
        ))}
      </Wrap>
      <Button
        onClick={() => {
          if (!toast.isActive(id)) {
            toast({
              id,
              title: "Hey! You can create a duplicate toast",
            });
          }
        }}
      >
        Click me!
      </Button>
    </div>
  );
};

export default ChakraFeedback;
