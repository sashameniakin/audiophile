export interface IProducts {
  /*   id: string; */
  title: string;
  quantity: number;
}

export type ProductsContextType = {
  products: IProducts[];
  addProduct: (product: IProducts) => void;
};
