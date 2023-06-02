import { FC } from "react";
import Button from "./UI/Button";

type Props = {
  direction_reverse?: boolean;
  image: string;
  alt: string;
  new_product?: boolean;
  product: string;
  description: string;
};

const Product: FC<Props> = ({
  direction_reverse,
  image,
  alt,
  new_product,
  product,
  description,
}) => {
  return (
    <section
      className={`flex ${
        direction_reverse ? "flex-row-reverse" : "flex-row"
      } items-center gap-[125px] mb-[160px]`}
    >
      <img src={image} alt={alt} className="w-1/2 rounded-lg" />
      <article className="w-1/2">
        <p
          className={`${
            new_product ? "block" : "hidden"
          } text-overline text-orange mb-4`}
        >
          NEW PRODUCT
        </p>
        <p className="text-h2 mb-8">{product}</p>
        <p className="text-body mb-10 opacity-50">{description}</p>
        <Button>SEE PRODUCT</Button>
      </article>
    </section>
  );
};

export default Product;
