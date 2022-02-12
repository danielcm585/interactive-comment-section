import React, { useState } from "react";
import { FaEdit, FaReply } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";

import data from "../data";
import Vote from "./Vote";
import CommentList from "./CommentList";
import TextSection from "./TextSection";

import { Image, Text, Link, Icon, Badge, Textarea, Button } from "@chakra-ui/react";
import { Box, HStack, Flex, Spacer, VStack } from "@chakra-ui/layout";

export default function Comment({ comment }) {
  const user = comment.user;
  const curUser = data.currentUser.username;

  const [ parentComment ] = data.comments.filter(com => com.id == comment.parentId);

  const replies = data.comments.filter(reply => reply.parentId == comment.id);

  const [ onReply, setOnReply ] = useState(false);
  const [ onEdit, setOnEdit ] = useState(false);
  
  const [ value, setValue ] = useState(comment.content);

  return (
    <Flex direction="column">
      <Box p="4" bg="gray.50" borderRadius="lg">
        <Flex>
          <Box>
            <Vote key={comment.id} comment={comment} />
          </Box>
          <Box pl="4">
            <HStack>
              <Image h="7" src={require("./images/avatars/image-amyrobson.png")} />
              <Text fontSize="sm" fontWeight="semibold">{user.username}</Text>
              {
                (user.username == curUser) && <Badge variant="solid" colorScheme="purple">you</Badge>
              }
              <Text fontSize="sm" color="gray.500">{comment.createdAt}</Text>
              <Spacer></Spacer>
              {
                (user.username != curUser) ? (
                  <Link color="purple.600" onClick={() => setOnReply(current => !current)}>
                    <Icon w="3" h="3" as={FaReply} /> Reply
                  </Link>
                ) : (
                  <>
                    {/* TODO: Delete func */}
                    <Link color="red.600" onClick={() => {
                      console.log("deleting..");
                    }}>
                      <Icon w="3" h="3" as={RiDeleteBinFill} /> Delete
                    </Link>
                    <Flex pl="1">
                      <Link color="purple.600" onClick={() => {
                          setOnEdit(current => !current);
                          console.log("editing..");
                        }}>
                        <Icon w="3" h="3" as={FaEdit} /> Edit
                      </Link>
                    </Flex>
                  </>
                )
              }
            </HStack>
            {
              onEdit ? (
                <>
                  <Textarea mt="2" borderRadius="lg" borderColor="purple.600" focusBorderColor="purple.600"
                    resize="none" placeHolder="Your Comment" value={value} onChange={(e) => {
                      const inputValue = e.target.value;
                      setValue(inputValue);
                      console.log("typing..");
                    }} />
                  <Flex alignItems="flex-end">
                    <Button mt="3" pl="3" pr="3" bg="purple.600" color="white" onClick={() => {
                      setOnEdit(current => !current);
                      console.log("edit success");
                    }}>UPDATE</Button>
                  </Flex>
                </>
              ) : (
                <>
                  <Text mt="2">
                    {
                      (parentComment != null) && <Link fontWeight="semibold" color="purple.600">{"@" + parentComment.user.username}</Link>
                    }
                    {" " + comment.content}
                  </Text>
                </>
              )
            }
          </Box>
        </Flex>
      </Box>
      {
        (replies.length > 0) && (
          <Box pt="2" pl="50">
            <CommentList root={false} comments={replies} />
          </Box>
        )
      }
      {
        onReply && (
          <Box pt="2" pl="50">
            <TextSection commentId={comment.id} onReply={true} />
          </Box>
        )
      }
    </Flex>
  );
}
