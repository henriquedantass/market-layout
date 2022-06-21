import { Flex, Image, Stack, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { MarketContext } from "../context/market.context";
import { currencyFormatter } from "../utils/format";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const { cartItems, totalCart } = useContext(MarketContext);

  return (
    <Stack spacing="20px" height="100%" width="100%">
      <Flex alignItems="center">
        <Image src="/assets/cart.png" alt="imagem de um carrinho" />
        <Text
          fontSize="1.7rem"
          fontWeight="bold"
          marginLeft="10px"
          color="white"
        >
          Shopping <br /> Cart
        </Text>
      </Flex>
      <Stack height="450px" overflowY="auto">
        {cartItems.length > 0 ? (
          <>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </>
        ) : (
          <Flex
            widht="100%"
            justifyContent="center"
            alignItems="center"
            height="100%"
            border="1px solid rgba(255, 255, 255, 0.25)"
          >
            <Text color="white">Adicione items no carrinho</Text>
          </Flex>
        )}
      </Stack>
      <Flex flexDir="column">
        <Text fontSize="1.7rem" color="white">
          TOTAL PRICE
        </Text>
        <Text fontSize="1.7rem" color="rgba(159, 202, 88, 1)">
          {currencyFormatter(totalCart)}
        </Text>
      </Flex>
      <Flex gap="0px 10px">
        <Flex
          cursor="pointer"
          w="fit-content"
          height="56px"
          justifyContent="center"
          alignItems="center"
          width="190px"
          boxShadow="0px 0px 65px rgba(245, 10, 70, 0.5)"
          color="white"
          background="rgba(245, 10, 70, 1)"
        >
          <Text textAlign="center">PAY BY CASH</Text>
        </Flex>
        <Flex
          cursor="pointer"
          w="fit-content"
          height="56px"
          justifyContent="center"
          alignItems="center"
          width="190px"
          border="1px solid rgba(255, 255, 255, 0.25)"
          color="rgba(255, 255, 255, 0.5)"
          background="rgba(255, 255, 255, 0.05)"
        >
          <Text textAlign="center">PAY BY CARD</Text>
        </Flex>
      </Flex>
    </Stack>
  );
};
