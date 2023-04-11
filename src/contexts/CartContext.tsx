import { ReactNode, createContext, useContext, useState } from "react";

export interface IProduct {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
}

interface CartContextType {
  products: IProduct[];
  addItemsToCart: (product: IProduct) => void;
  removeItemOfCart: (product: IProduct) => void;
}

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: CartProviderProps) {
  const [products, setProducts] = useState<IProduct[]>([]);

  function addItemsToCart(product: IProduct) {
    const productAlreadyExists = products.find(
      (productCart) => productCart.id === product.id
    );

    if (!productAlreadyExists) {
      setProducts([...products, product]);
    }
  }

  function removeItemOfCart(productCart: IProduct) {
    const newProductsArray = products.filter(
      (product) => productCart.id !== product.id
    );

    setProducts(newProductsArray);
  }

  return (
    <CartContext.Provider
      value={{ products, addItemsToCart, removeItemOfCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  return context;
}
