import { FC, useContext, useState } from "react";
import Button from "./UI/Button";
import { ProductContext } from "../context/context";
import { ProductsContextType } from "../@types/products";

type Props = {
  id: string;
  image: string;
  alt: string;
  new_product?: boolean;
  product: string;
  description: string;
  price: number;
  imgCart: string;
  shortTitle: string;
};

const MainProduct: FC<Props> = ({
  id,
  image,
  alt,
  new_product,
  product,
  description,
  price,
  imgCart,
  shortTitle,
}) => {
  const [count, setCount] = useState<number>(1);

  const { addProduct } = useContext(ProductContext) as ProductsContextType;

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    console.log(product);
    addProduct({
      id: id,
      title: shortTitle,
      quantity: count,
      price: price,
      img: imgCart,
      alt: alt,
    });
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
        <p className="mb-[47px] text-h6">$ {price.toLocaleString()}</p>
        <section className="flex gap-4">
          <div className="w-[120px] h-[48px] bg-gray flex gap-5 items-center justify-between px-[20px]">
            <button
              onClick={() => setCount((prev) => Math.max(prev - 1, 1))}
              className="text-button opacity-25 hover:text-orange hover:opacity-100"
            >
              -
            </button>
            <p className="text-button">{count}</p>
            <button
              onClick={() => setCount((prev) => prev + 1)}
              className="text-button opacity-25 hover:text-orange hover:opacity-100"
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
