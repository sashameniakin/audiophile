import { FC } from "react";
import Button from "./UI/Button";

type Props = {
  image: string;
  alt: string;
  new_product?: boolean;
  product: string;
  description: string;
  price: string;
};

const MainProduct: FC<Props> = ({
  image,
  alt,
  new_product,
  product,
  description,
  price,
}) => {
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
            <button className="text-button opacity-25">-</button>
            <p className="text-button">1</p>
            <button className="text-button opacity-25">+</button>
          </div>
          <Button>ADD TO CART</Button>
        </section>
      </aside>
    </article>
  );
};

export default MainProduct;
