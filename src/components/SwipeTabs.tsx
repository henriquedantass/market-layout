import { Flex, FlexProps, Tabs, Text } from "@chakra-ui/react";

export type Tab = {
  id: number;
  name: string;
};

interface SwipeTabsProps extends FlexProps {
  selectedTab?: Tab;
  onChangeTab: (tab: Tab) => void;
  tabs: Tab[];
}

export const SwipeTabs = ({
  tabs,
  onChangeTab,
  selectedTab,
  ...rest
}: SwipeTabsProps) => {
  return (
    <Flex w="100%" justifyContent="space-between" h="fit-content">
      {tabs.map((tab) => {
        const isSelected = tab.id === selectedTab?.id;

        return (
          <Flex
            cursor="pointer"
            key={tab.id}
            w="fit-content"
            height="56px"
            justifyContent="center"
            alignItems="center"
            width="190px"
            boxShadow={isSelected ? "0px 0px 65px rgba(245, 10, 70, 0.5)" : ""}
            border={isSelected ? "0px" : "1px solid rgba(255, 255, 255, 0.25)"}
            color={isSelected ? "white" : "rgba(255, 255, 255, 0.5)"}
            background={
              isSelected ? "rgba(245, 10, 70, 1)" : "rgba(255, 255, 255, 0.05)"
            }
            onClick={() => onChangeTab(tab)}
            {...rest}
          >
            <Text textAlign="center">{tab.name}</Text>
          </Flex>
        );
      })}
    </Flex>
  );
};
