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
  imageTablet: string;
  imageMobile: string;
};

const MainProduct: FC<Props> = ({
  id,
  image,
  imageTablet,
  imageMobile,
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
    <article className="flex flex-col desktop:flex-row tablet:flex-row items-center gap-8 desktop:gap-[125px] tablet:gap-[69px] mb-[88px] desktop:mb-[160px] tablet:mb-[120px]">
      <picture className="w-full desktop:w-1/2 tablet:w-1/2">
        <source media="(min-width:821px)" srcSet={image} />
        <source media="(min-width:415px)" srcSet={imageTablet} />
        <img src={imageMobile} alt={alt} className="rounded-lg" />
      </picture>

      <aside className="w-full desktop:w-1/2 tablet:w-1/2">
        <p
          className={`${
            new_product ? "block" : "hidden"
          } text-overline desktop:text-overline tablet:text-tablet_new_product text-orange mb-6 desktop:mb-4 tablet:mb-4`}
        >
          NEW PRODUCT
        </p>

        <p className="text-tablet_title desktop:text-h2 tablet:text-tablet_title mb-6 desktop:mb-8 tablet:mb-8">
          {product}
        </p>
        <p className="text-body mb-6 desktop:mb-10 tablet:mb-8 opacity-50">
          {description}
        </p>
        <p className="mb-[31px] desktop:mb-[47px] tablet:mb-[31px] text-h6">
          $ {price.toLocaleString()}
        </p>
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
