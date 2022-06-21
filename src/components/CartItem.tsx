import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { MarketContext } from "../context/market.context";
import { currencyFormatter } from "../utils/format";
import { ItemProps } from "./CardItem";

interface CartItemProps {
  item: ItemProps;
}

export const CartItem = ({ item }: CartItemProps) => {
  const { setTotalCart, totalCart, handleRemoveItemOfCart } =
    useContext(MarketContext);
  const [itemQuantity, setItemQuantity] = useState<number>(1);

  function handleAddQuantity() {
    setItemQuantity(itemQuantity + 1);
    setTotalCart(totalCart + item.price);
  }

  function handleRemoveQuantity() {
    if (itemQuantity > 0) {
      setItemQuantity(itemQuantity - 1);
      setTotalCart(totalCart - item.price);

      return;
    }

    handleRemoveItemOfCart(item);
  }

  return (
    <Flex
      border="1px solid rgba(255, 255, 255, 0.25);"
      borderRadius="2px"
      padding="16px"
      bg=" rgba(255, 255, 255, 0.05);"
      w="100%"
      h="56px"
      justifyContent="space-between"
    >
      <Flex alignItems="center" gap="0 17px">
        <Image
          w="30px"
          h="30px"
          src="/assets/burguer.png"
          alt="burguer imagem"
        />
        <Text
          color="white"
          fontSize="1rem"
          fontWeight="bold"
          textTransform="uppercase"
          isTruncated
          maxW="100px"
        >
          {item.name}
        </Text>
      </Flex>
      <Flex>
        <Flex gap="0 10px" color="white" alignItems="center" marginRight="17px">
          <Button
            transform="skew(-15deg)"
            h="32px"
            w="32px"
            bg="rgba(255, 255, 255, 0.05);"
            variant="unstyled"
            onClick={handleAddQuantity}
          >
            +
          </Button>
          <Text>{itemQuantity}</Text>
          <Button
            h="32px"
            transform="skew(-15deg)"
            w="32px"
            bg="rgba(255, 255, 255, 0.05);"
            variant="unstyled"
            onClick={handleRemoveQuantity}
          >
            -
          </Button>
        </Flex>
        <Text color="rgba(159, 202, 88, 1)">
          {currencyFormatter(item.price * itemQuantity)}
        </Text>
      </Flex>
    </Flex>
  );
};
