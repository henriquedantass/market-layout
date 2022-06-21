import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  SetStateAction,
  Dispatch,
} from "react";
import { ItemProps } from "../components/CardItem";

interface MarketContextProps {
  handleAddItemOnCart: (selectedItem: ItemProps) => void;
  handleRemoveItemOfCart: (selectedItem: ItemProps) => void;
  cartItems: ItemProps[];
  totalCart: number;
  setTotalCart: Dispatch<SetStateAction<number>>;
}

interface MarketProviderProps {
  children: ReactNode;
}

export const MarketContext = createContext({} as MarketContextProps);

export const MarketContextProvider = ({ children }: MarketProviderProps) => {
  const [cartItems, setCartItems] = useState<ItemProps[]>([]);
  const [totalCart, setTotalCart] = useState<number>(0);

  function handleAddItemOnCart(selectedItem: ItemProps) {
    const itemAlreadyOnCart = cartItems.findIndex(
      (item) => item.id === selectedItem.id
    );

    if (itemAlreadyOnCart === -1) {
      setCartItems([...cartItems, selectedItem]);
      setTotalCart(totalCart + selectedItem.price);
    }
  }

  function handleRemoveItemOfCart(selectedItem: ItemProps) {
    const itemAlreadyOnCart = cartItems.findIndex(
      (item) => item.id === selectedItem.id
    );

    if (itemAlreadyOnCart !== -1) {
      const filteredArray = cartItems.filter(
        (item) => item.id !== selectedItem.id
      );

      setCartItems(filteredArray);
    }
  }

  return (
    <MarketContext.Provider
      value={{
        handleRemoveItemOfCart,
        handleAddItemOnCart,
        setTotalCart,
        cartItems,
        totalCart,
      }}
    >
      {children}
    </MarketContext.Provider>
  );
};
