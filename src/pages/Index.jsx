import React, { useState } from "react";
import { Box, Heading, Input, Button, List, ListItem, ListIcon, VStack, HStack, IconButton, useToast } from "@chakra-ui/react";
import { FaPlus, FaTrash, FaSave } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const toast = useToast();

  const handleInputChange = (e) => setInputValue(e.target.value);

  const addTodo = () => {
    if (inputValue.trim() === "") {
      toast({
        title: "No content",
        description: "Todo can't be empty",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setTodos([...todos, { task: inputValue, note: "" }]);
    setInputValue("");
  };

  const handleNoteChange = (index, note) => {
    const newTodos = todos.map((todo, i) => (i === index ? { ...todo, note } : todo));
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <VStack p={8}>
      <Heading mb="8">Todo App</Heading>
      <HStack>
        <Input value={inputValue} onChange={handleInputChange} onKeyPress={handleKeyPress} placeholder="Add a new task..." />
        <IconButton icon={<FaPlus />} onClick={addTodo} colorScheme="red" aria-label="Add todo" />
      </HStack>
      <List spacing={3} my={5} w="100%">
        {todos.map((todo, index) => (
          <ListItem key={index} p={2} bg="gray.100" borderRadius="md">
            <HStack justify="space-between">
              <Box>
                <VStack align="stretch">
                  <Box>{todo.task}</Box>
                  <Input value={todo.note} onChange={(e) => handleNoteChange(index, e.target.value)} placeholder="Add a note..." size="sm" />
                </VStack>
              </Box>
              <IconButton icon={<FaTrash />} onClick={() => deleteTodo(index)} colorScheme="blue" aria-label="Delete todo" />
              <IconButton icon={<FaSave />} onClick={() => {}} colorScheme="green" aria-label="Save todo" />
            </HStack>
          </ListItem>
        ))}
      </List>
    </VStack>
  );
};

export default Index;
