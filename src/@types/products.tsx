export interface IProducts {
  id: string;
  title: string;
  quantity: number;
  price: number;
  img: string;
  alt: string;
}

export type ProductsContextType = {
  products: IProducts[];
  addProduct: (product: IProducts) => void;
  removeProducts: (product: IProducts[]) => void;
  totalPrice: number;
  incrementOne: (id: string) => void;
  decrementOne: (id: string) => void;
};
