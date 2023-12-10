import { Box, Center, Container, Flex, Input } from "@chakra-ui/react";
import React from "react";
import FeedPosts from "../../Components/FeedPosts/FeedPosts";

const HomePage = () => {
  return (
    <Container maxW={"container.lg"}>
      <Flex>
        <Box flex={2} py={10}>
          <FeedPosts />
        </Box>
      </Flex>
    </Container>
  );
};

export default HomePage;
