import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" width="full" padding="4" bg="gray.300" textAlign="center">
      &copy; {new Date().getFullYear()} Todo App
    </Box>
  );
};

export default Footer;
