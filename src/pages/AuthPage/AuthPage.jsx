import React, { useState } from "react";
import { Container, Flex } from "@chakra-ui/react";
import AuthForm from "../../Components/AuthForm/AuthForm";

const AuthPage = () => {
  return (
    <div>
      <Flex
        minH={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
        px={4}
      >
        <Container width={"container.md"} padding={0}>
          <AuthForm />
        </Container>
      </Flex>
    </div>
  );
};

export default AuthPage;
