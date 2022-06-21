/* eslint-disable react/no-unescaped-entities */
import { Flex, Image, Text } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex w="100%" height="fit-content" justifyContent="space-between">
      <Flex alignItems="center">
        <Image src="/assets/market.png" alt="icone de uma loja" />
        <Text
          marginLeft="15px"
          fontWeight="bold"
          fontSize="1.7rem"
          color="white"
        >
          24/7 <br /> Seven'n'Lewen
        </Text>
      </Flex>
      <Flex alignSelf="flex-start" alignItems="center">
        <Text
          fontWeight="bold"
          marginRight="10px"
          fontSize="1.7rem"
          color="white"
        >
          $34 002 324
        </Text>
        <Text
          lineHeight="15px"
          opacity={0.4}
          fontWeight="bold"
          fontSize="0.8rem"
          color="white"
        >
          YOUR <br /> BALANCE
        </Text>
      </Flex>
    </Flex>
  );
}
