import { FC } from "react";
import Button from "./UI/Button";
import { Link } from "react-router-dom";

type Props = {
  direction_reverse?: boolean;
  image: string;
  imageTablet: string;
  imageMobile: string;
  alt: string;
  new_product?: boolean;
  product: string;
  description: string;
  to: string;
};

const Product: FC<Props> = ({
  direction_reverse,
  image,
  imageTablet,
  imageMobile,
  alt,
  new_product,
  product,
  description,
  to,
}) => {
  return (
    <section
      className={`flex ${
        direction_reverse
          ? "flex-col desktop:flex-row-reverse tablet:flex-col"
          : "flex-col desktop:flex-row tablet:flex-col"
      } items-center gap-8 desktop:gap-[125px] tablet:gap-[52px] mb-[120px] desktop:mb-[160px] tablet:mb-[120px]`}
    >
      <picture className="desktop:w-1/2 tablet:w-full">
        <source media="(min-width:821px)" srcSet={image} />
        <source media="(min-width:415px)" srcSet={imageTablet} />
        <img src={imageMobile} alt={alt} className="rounded-lg" />
      </picture>

      <article className="desktop:w-1/2 text-center desktop:text-left tablet:text-center tablet:w-[80%]">
        <p
          className={`${
            new_product ? "block" : "hidden"
          } text-overline text-orange mb-6 desktop:mb-4 tablet:mb-4`}
        >
          NEW PRODUCT
        </p>
        <p className="text-tablet_title desktop:text-h2 tablet:text-h2 mb-6 desktop:mb-8 tablet:mb-8">
          {product}
        </p>
        <p className="text-body mb-6 desktop:mb-10 tablet:mb-6 opacity-50">
          {description}
        </p>
        <Link to={to}>
          <Button>SEE PRODUCT</Button>
        </Link>
      </article>
    </section>
  );
};

export default Product;
