import { Flex, FlexProps, Image, Stack, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { MarketContext } from "../context/market.context";
import { currencyFormatter } from "../utils/format";

export type ItemProps = {
  category: number;
  id: number;
  index: string;
  name: string;
  price: number;
};

interface CardItemProps extends FlexProps {
  item: ItemProps;
}

export const CardItem = ({ item }: CardItemProps) => {
  const { handleAddItemOnCart } = useContext(MarketContext);

  return (
    <Stack
      background="rgba(255, 255, 255, 0.05);"
      borderRadius="2px"
      h="220px"
      w="190px"
      spacing={5}
      padding="15px"
    >
      <Text color="white" fontWeight={500}>
        {item.name}
      </Text>
      <Image
        alignSelf="center"
        w="80px"
        h="80px"
        src="/assets/burguer.png"
        alt="imagem de um burguer"
      />
      <Flex w="100%">
        <Flex
          justifyContent="center"
          alignItems="center"
          border="1px solid rgba(255, 255, 255, 0.15);"
          borderRight="0px"
          transform="skew(-15deg)"
          h="29px"
          zIndex={10}
          w="111px"
        >
          <Text transform="skew(15deg)" color="rgba(159, 202, 88, 1)">
            {currencyFormatter(item.price)}
          </Text>
        </Flex>
        <Flex
          justifyContent="center"
          alignItems="center"
          w="78px"
          borderRadius="4px"
          transform="skew(-15deg)"
          zIndex={200}
          h="29px"
          cursor="pointer"
          onClick={() => handleAddItemOnCart(item)}
          background="rgba(255, 255, 255, 0.15)"
        >
          <Text transform="skew(15deg)" color="white">
            Add
          </Text>
        </Flex>
      </Flex>
    </Stack>
  );
};
