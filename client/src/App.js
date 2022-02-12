import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

import data from "./data";
import CommentList from "./components/CommentList";

import { useColorMode } from "@chakra-ui/color-mode";
import { useMediaQuery } from "@chakra-ui/media-query";
import { IconButton, Image, Text } from "@chakra-ui/react";
import { VStack, Flex, Box } from "@chakra-ui/layout";

export default function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = (colorMode === "dark");

  const isBigScreen = useMediaQuery("(min-width:600px)");

  const curUser = data.currentUser.username;

  // const [ comments , setComments ] = useState([]);
  // useEffect(() => {
  //   fetch("http://127.0.0.1:5000/")
  //   .then(resp => resp.json())
  //   .then(json => {
  //     console.log(json);
  //     setComments(json);
  //   });
  // }, []);
  
  const rootComments = data.comments.filter(comment => comment.parentId == -1);
  // const rootComments = comments.filter(comment => comment.parentId == -1);

  return (
    <VStack>
      <VStack p="10" w={isBigScreen ? "50%" : "100%"}>
        <Flex alignSelf="flex-end">
          <IconButton size="md" icon={isDark ? <FaSun /> : <FaMoon />} onClick={toggleColorMode}></IconButton>
          <Box ml="2" p="1" pl="2" pr="2" bg="gray.100" borderRadius="lg">
            <Flex align="center">
              <Image h="8" src={require("./components/images/avatars/image-amyrobson.png")} />
              <Text ml="1">{curUser}</Text>
            </Flex>
          </Box>
        </Flex>
        <CommentList comments={rootComments} root={true} />
      </VStack>
    </VStack>
  );
}
