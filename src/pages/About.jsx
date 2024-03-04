import React from "react";
import { Box, Heading, VStack } from "@chakra-ui/react";

const About = () => {
  return (
    <VStack p={8}>
      <Heading mb="8">About</Heading>
      <Box>This is the about page for the Todo App.</Box>
    </VStack>
  );
};

export default About;
