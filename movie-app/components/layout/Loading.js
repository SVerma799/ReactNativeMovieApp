import React from "react";
import { Center, Heading, HStack, Spinner, View } from "native-base";

export default function Loading() {
  return (
    <Center>
      <HStack>
        <Spinner color="black" accessibilityLabel="Loading posts" />
        <Heading px={2} fontSize="md" fontWeight="bold">
          Loading Results...
        </Heading>
      </HStack>
    </Center>
  );
}
