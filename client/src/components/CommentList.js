import React from "react";

import Comment from "./Comment";
import TextSection from "./TextSection";

import { v4 as uuidv4 } from "uuid";

import { VStack, Flex } from "@chakra-ui/react";

export default function CommentList({ comments, root }) {
  return (
    // <VStack>
      <Flex justifyContent="center">
        <Flex direction="column">
          {
            comments.map((comment, index) => <Comment key={index} comment={comment} />)
          }
          {
            root && <TextSection onReply={false} commentId={uuidv4()} />
          }
        </Flex>
      </Flex>
    // </VStack>
  );
}
