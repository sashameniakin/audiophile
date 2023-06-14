import {
  FC,
  ReactChild,
  ReactNode,
  createContext,
  useEffect,
  useState,
} from "react";

import { IProducts, ProductsContextType } from "../@types/products";

type Props = {
  children: ReactNode | ReactChild;
};

export const ProductContext = createContext<ProductsContextType | null>(null);

export const ProductProvider: FC<Props> = ({ children }) => {
  const [totalPrice, setPrice] = useState<number>(0);
  const [products, setProducts] = useState<IProducts[]>(() => {
    if (typeof window !== "undefined") {
      try {
        const localData = JSON.parse(localStorage.getItem("products") || "");
        return localData;
      } catch (error) {
        console.log(error);
      }
    }
  });

  const addProduct = (product: IProducts) => {
    let id = product.id;
    let quantity = product.quantity;
    let position = products?.filter((position) => position.id === id);

    if (products === undefined) {
      const newProduct: IProducts = {
        id: product.id,
        title: product.title,
        quantity: product.quantity,
        price: product.price,
        img: product.img,
        alt: product.alt,
      };
      setProducts([newProduct]);
    } else {
      if (products?.filter((position) => position.id === id).length > 0) {
        position[0].quantity += quantity;
        console.log(products);
        setProducts([...products]);
      } else {
        const newProduct: IProducts = {
          id: product.id,
          title: product.title,
          quantity: product.quantity,
          price: product.price,
          img: product.img,
          alt: product.alt,
        };
        setProducts([...products, newProduct]);
        console.log(products);
      }
    }
  };

  const removeProducts = (product: IProducts[]) => {
    products.splice(0, products.length);
    setPrice(0);
  };

  const incrementOne = (id: string) => {
    products.filter((product: IProducts) => {
      if (product.id === id) {
        product.quantity += 1;
        setProducts([...products]);
      }
    });
  };
  const decrementOne = (id: string) => {
    products.filter((product: IProducts) => {
      if (product.id === id) {
        if (product.quantity > 1) {
          product.quantity -= 1;
          setProducts([...products]);
        }
      }
    });
  };

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    if (products === undefined) {
      setPrice(0);
    } else {
      setPrice(
        products?.map((x) => x.price * x.quantity).reduce((a, b) => a + b)
      );
    }
  }, [products]);

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        removeProducts,
        totalPrice,
        incrementOne,
        decrementOne,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
