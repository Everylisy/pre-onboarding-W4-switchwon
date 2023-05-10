import { Center, CircularProgress } from "@chakra-ui/react";

const LoadingSpinner = () => {
  return (
    <Center height="100vh">
      <CircularProgress color="blue" isIndeterminate size="16" />
    </Center>
  );
};

export default LoadingSpinner;
