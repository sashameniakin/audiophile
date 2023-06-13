import { FC, useContext, useState } from "react";
import Button from "./UI/Button";
import { ProductContext } from "../context/context";
import { IProducts, ProductsContextType } from "../@types/products";

type Props = {
  /*  id: string; */
  image: string;
  alt: string;
  new_product?: boolean;
  product: string;
  description: string;
  price: string;
};

const MainProduct: FC<Props> = ({
  /* id, */
  image,
  alt,
  new_product,
  product,
  description,
  price,
}) => {
  const [count, setCount] = useState<number>(0);
  const [data, setData] = useState<IProducts | any>();
  const { addProduct } = useContext(ProductContext) as ProductsContextType;

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    setData({
      /*    id: id, */
      title: product,
      quantity: count,
    });
    addProduct(data);
  }

  return (
    <article className="flex items-center gap-[125px] mb-[160px]">
      <img src={image} alt={alt} className="w-1/2 rounded-lg" />
      <aside className="w-1/2">
        <p
          className={`${
            new_product ? "block" : "hidden"
          } text-overline text-orange mb-4`}
        >
          NEW PRODUCT
        </p>

        <p className="text-h2 mb-8">{product}</p>
        <p className="text-body mb-10 opacity-50">{description}</p>
        <p className="mb-[47px] text-h6">{price}</p>
        <section className="flex gap-4">
          <div className="w-[120px] h-[48px] bg-gray flex gap-5 items-center justify-between px-[20px]">
            <button
              onClick={() => setCount((prev) => Math.max(prev - 1, 0))}
              className="text-button opacity-25"
            >
              -
            </button>
            <p className="text-button">{count}</p>
            <button
              onClick={() => setCount((prev) => prev + 1)}
              className="text-button opacity-25"
            >
              +
            </button>
          </div>
          <Button handleClick={handleClick}>ADD TO CART</Button>
        </section>
      </aside>
    </article>
  );
};

export default MainProduct;
