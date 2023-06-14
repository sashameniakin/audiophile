import { FC, useContext } from "react";
import { IProducts, ProductsContextType } from "../@types/products";
import { ProductContext } from "../context/context";

type Props = {
  product: IProducts;
  products: IProducts[];
};

const CartProduct: FC<Props> = ({ product }) => {
  const { incrementOne, decrementOne } = useContext(
    ProductContext
  ) as ProductsContextType;

  function handleDecrement(e: React.MouseEvent<HTMLButtonElement>) {
    decrementOne(product.id);
  }

  function handleIncrement(e: React.MouseEvent<HTMLButtonElement>) {
    incrementOne(product.id);
  }

  return (
    <article className="flex justify-between items-center mb-6">
      <aside className="flex items-center gap-4">
        <img src={product.img} alt={product.alt} className="w-[64px]" />
        <div className="flex flex-col">
          <p className="text-cart_title">{product.title}</p>
          <p className="text-cart_price opacity-50">
            $ {product.price.toLocaleString()}
          </p>
        </div>
      </aside>
      <div className="w-[96px] h-[32px] bg-gray flex gap-5 items-center justify-between px-[20px]">
        <button
          onClick={handleDecrement}
          className="text-button opacity-25 hover:text-orange hover:opacity-100"
        >
          -
        </button>
        <p className="text-button">{product.quantity}</p>
        <button
          onClick={handleIncrement}
          className="text-button opacity-25 hover:text-orange hover:opacity-100"
        >
          +
        </button>
      </div>
    </article>
  );
};

export default CartProduct;
