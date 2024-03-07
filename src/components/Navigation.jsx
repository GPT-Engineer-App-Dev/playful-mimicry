import { Box, Link, Flex } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Flex as="nav" justify="space-between" wrap="wrap" padding="1rem" bg="gray.200" color="black">
      <Box>
        <Link as={RouterLink} to="/" px={2}>
          Home
        </Link>
        <Link as={RouterLink} to="/about" px={2}>
          About
        </Link>
      </Box>
    </Flex>
  );
};

export default Navigation;
