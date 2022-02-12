import React, { useState } from "react";

import { Button, Text } from "@chakra-ui/react";
import { Box, VStack } from "@chakra-ui/layout";

export default function Vote({ comment }) {
  const [ score, setScore ] = useState(parseInt(comment.score,10));

  return (
    <Box borderRadius="lg" p="1" bg="gray.100">
      <VStack spacing="md">
        <Button size="xs" onClick={() => setScore(prevScore => prevScore+1)}>+</Button>
        <Text fontSize="sm" fontWeight="semibold" color="purple.600">{score}</Text>
        <Button size="xs" onClick={() => setScore(prevScore => prevScore-1)}>-</Button>
      </VStack>
    </Box>
  );
}
