import React, { useState } from "react";
import { Input, VStack, Button, Box, Flex, Text } from "@chakra-ui/react";
import Login from "./Login";
import Signup from "./Signup";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <VStack spacing={3}>
        <Text fontSize="4xl">{isLogin ? "Log in" : "Sign up"}</Text>

        {isLogin ? <Login /> : <Signup />}
        <Box borderRadius={4}>
          <Flex alignItems={"center"} justifyContent={"center"}>
            <Box mx={2}>
              {isLogin ? "Don't have an account?" : "Already have an account?"}
            </Box>
            <Box
              onClick={() => setIsLogin(!isLogin)}
              color={"blue.500"}
              cursor={"pointer"}
            >
              {isLogin ? "Sign up" : "Log in"}
            </Box>
          </Flex>
        </Box>
      </VStack>
    </>
  );
};

export default AuthForm;
