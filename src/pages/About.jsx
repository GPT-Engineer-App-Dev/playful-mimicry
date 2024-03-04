import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Box p={8}>
      <Heading mb={4}>About Us</Heading>
      <Text>This is the about page for the Todo App. Here you can find information about the application and its creators.</Text>
    </Box>
  );
};

export default About;
