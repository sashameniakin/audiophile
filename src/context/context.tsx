import {
  FC,
  ReactChild,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";

import { IProducts, ProductsContextType } from "../@types/products";

type Props = {
  children: ReactNode | ReactChild;
};

/* export interface CurrentProductContextType {
  product: string;
  quantity: number;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
} */

export const ProductContext = createContext<ProductsContextType | null>(null);

export const ProductProvider: FC<Props> = ({ children }) => {
  const [products, setProducts] = useState<IProducts[]>([
    {
      /*   id: "1", */
      title: "ssd",
      quantity: 2,
    },
  ]);

  const addProduct = (product: IProducts) => {
    const newProduct: IProducts = {
      /*   id: product.id, */
      title: product.title,
      quantity: product.quantity,
    };
    setProducts([...products, newProduct]);
  };

  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

/* export function useProducts() {
  return useContext(ProductContext);
} */
