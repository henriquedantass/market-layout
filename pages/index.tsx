import type { NextPage } from "next";
import { Flex, Box, Stack, SimpleGrid, Text } from "@chakra-ui/react";
import { Header } from "../src/components/Header";
import { SwipeTabs, Tab } from "../src/components/SwipeTabs";
import { useCallback, useEffect, useState } from "react";
import { CardItem, ItemProps } from "../src/components/CardItem";
import { loadCategories, loadItems } from "../src/apis/market.apis";
import { Cart } from "../src/components/Cart";

const Home: NextPage = () => {
  const [tabs, setTabs] = useState<Tab[]>([]);
  const [items, setItems] = useState<ItemProps[]>([]);
  const [selectedTab, setSelectedTab] = useState<Tab>(tabs[0]);
  const [categorieItems, setCategoriesItem] = useState<ItemProps[]>([]);

  const loadMarket = useCallback(async () => {
    const [categories, items] = await Promise.all([
      loadCategories(),
      loadItems(),
    ]);

    setTabs(categories.data);
    setItems(items.data);
  }, []);

  useEffect(() => {
    loadMarket();
  }, [loadMarket]);

  const handleOnChangeCategorie = (categorie: Tab) => {
    setSelectedTab(categorie);
    const itemsOfCategorie = items.filter(
      (item) => item.category === categorie.id
    );

    setCategoriesItem(itemsOfCategorie);
  };

  return (
    <Flex w="100vw" h="100vh" backgroundImage="/assets/background.png">
      <Box
        w="100%"
        h="100%"
        padding="5rem 15rem"
        background="linear-gradient(181.02deg, rgba(44, 30, 50, 0.85) 0.87%, rgba(2, 13, 40, 0.85) 99.23%), radial-gradient(51.51% 50% at 43.89% 50%, rgba(19, 20, 44, 0.91) 0%, rgba(29, 26, 30, 0) 100%);"
      >
        <Flex w="100%" h="100%" flexDir="column">
          <Header />
          <Flex gap="0 20px" justifyContent="space-between" w="100%" h="100%">
            <Stack paddingTop="20px" w="75%" h="100%" spacing="20px">
              <SwipeTabs
                onChangeTab={(tab) => handleOnChangeCategorie(tab)}
                tabs={tabs}
                selectedTab={selectedTab}
              />

              {categorieItems?.length > 0 ? (
                <SimpleGrid
                  w="100%"
                  h="fit-content"
                  row={5}
                  columns={5}
                  spacingX="10px"
                  spacingY="10px"
                >
                  {categorieItems?.map((item) => (
                    <CardItem key={item.id} item={item} />
                  ))}
                </SimpleGrid>
              ) : (
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  w="100%"
                  h="30%"
                >
                  <Text color="white" fontSize="2rem">
                    Nenhuma categoria selecionada
                  </Text>
                </Flex>
              )}
            </Stack>
            <Box w="30%" height="100%">
              <Cart />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Home;
