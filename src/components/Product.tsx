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
          ? "desktop:flex-row-reverse tablet:flex-col"
          : "desktop:flex-row tablet:flex-col"
      } items-center desktop:gap-[125px] tablet:gap-[52px] desktop:mb-[160px] tablet:mb-[120px]`}
    >
      <picture className="desktop:w-1/2 tablet:w-full">
        <source media="(min-width:821px)" srcSet={image} />
        <source media="(min-width:415px)" srcSet={imageTablet} />
        <img src={imageMobile} alt={alt} className="rounded-lg" />
      </picture>

      <article className="desktop:w-1/2 desktop:text-left tablet:text-center tablet:w-[80%]">
        <p
          className={`${
            new_product ? "block" : "hidden"
          } text-overline text-orange mb-4`}
        >
          NEW PRODUCT
        </p>
        <p className="text-h2 mb-8">{product}</p>
        <p className="text-body desktop:mb-10 tablet:mb-6 opacity-50">
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
