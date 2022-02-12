import React, { useState } from "react";

import data from "../data"

import { Button, Image, Textarea } from "@chakra-ui/react";
import { Box, Flex } from "@chakra-ui/layout";

export default function TextSection({ onReply, commentId }) {
  let defaultValue = "";
  if (onReply) {
    const [ parentComment ] = data.comments.filter(comment => comment.id == commentId);
    defaultValue = "@" + parentComment.user.username + " ";
  }
  else {
    // TODO: create new comment {parentId: -1}
  }
  const [ value, setValue ] = useState(defaultValue);

  return (
    <Box p="4" bg="gray.50" borderRadius="lg">
      <Flex>
        <Image h="8" src={require("./images/avatars/image-amyrobson.png")} />
        <Textarea ml="3" borderRadius="lg" borderColor="purple.600" focusBorderColor="purple.600"
          resize="none" placeHolder="Your Comment" value={value} onChange={(e) => {
            setValue(e.target.value);
            console.log("typing..");
          }} />
        {
          onReply ? (
            <Button ml="3" pl="5" pr="5" bg="purple.600" color="white" onClick={() => {
              console.log("reply");
            }}>REPLY</Button>
          ) : (
            <Button ml="3" pl="5" pr="5" bg="purple.600" color="white" onClick={() => {
              console.log("send");
            }}>SEND</Button>
          )
        }
      </Flex>
    </Box>
  );
}
