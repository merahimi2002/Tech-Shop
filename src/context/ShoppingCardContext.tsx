import { createContext, ReactNode, useContext, useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart";
import { ShoppingFavouriteCart } from "../components/ShoppingFavoriteCart";
import { useLocalStorage } from "../hooks/useLocalStorage";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
};

type FavoriteItem = {
  id: number;
  quantityFavorite: number;
};

type ShoppingCartContext = {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItem[];

  openCartF: () => void;
  closeCartF: () => void;
  getItemFavoriteQuantity: (id: number) => number;
  AddCartFavoriteQuantity: (id: number) => void;
  removeFromFavoriteCart: (id: number) => void;
  cartFavoriteQuantity: number;
  cartFavoriteItems: FavoriteItem[];
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenF, setIsOpenF] = useState(false);

  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    []
  );

  const [cartFavoriteItems, setFavoriteCartItems] = useLocalStorage<FavoriteItem[]>(
    "aa",[]
  );

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const cartFavoriteQuantity = cartFavoriteItems.reduce(
    (quantityFavorite, item) => item.quantityFavorite + quantityFavorite,
    0
  );

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);


  const openCartF = () => setIsOpenF(true);
  const closeCartF = () => setIsOpenF(false);


  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }
  function increaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function decreaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function removeFromCart(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  function getItemFavoriteQuantity(id: number) {
    return (
      cartFavoriteItems.find((item) => item.id === id)?.quantityFavorite || 0
    );
  }

  function AddCartFavoriteQuantity(id: number) {
    setFavoriteCartItems((currItems2) => {
      if (currItems2.find((item) => item.id === id) == null) {
        return [...currItems2, { id, quantityFavorite: 1 }];
      } else {
        return currItems2.map((item) => {
          if (item.id === id) {
            return { ...item, quantityFavorite: 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromFavoriteCart(id: number) {
    setFavoriteCartItems((currItems2) => {
      return currItems2.filter((item) => item.id !== id);
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        cartQuantity,

        openCartF,
        closeCartF,
        getItemFavoriteQuantity,
        AddCartFavoriteQuantity,
        removeFromFavoriteCart,
        cartFavoriteQuantity,
        cartFavoriteItems,
      }}
    >
      {children}
      <ShoppingFavouriteCart isOpenF={isOpenF} />
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
}
