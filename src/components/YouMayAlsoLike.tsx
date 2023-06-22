import { FC } from "react";
import Button from "./UI/Button";
import { Link } from "react-router-dom";

type Props = {
  image1: string;
  image1Tablet: string;
  image1Mobile: string;
  image2: string;
  image2Tablet: string;
  image2Mobile: string;
  image3: string;
  image3Tablet: string;
  image3Mobile: string;
  alt1: string;
  alt2: string;
  alt3: string;
  product1: string;
  product2: string;
  product3: string;
  link1: string;
  link2: string;
  link3: string;
};

const YouMayAlsoLike: FC<Props> = ({
  image1,
  image1Tablet,
  image1Mobile,
  image2,
  image2Tablet,
  image2Mobile,
  image3,
  image3Tablet,
  image3Mobile,
  alt1,
  alt2,
  alt3,
  product1,
  product2,
  product3,
  link1,
  link2,
  link3,
}) => {
  return (
    <section className="flex flex-col desktop:flex-row tablet:flex-row gap-14 desktop:gap-[30px] tablet:gap-[11px] justify-between mb-[200px] desktop:mb-[200px] tablet:mb-[160px]">
      <article className="flex flex-col items-center">
        <picture>
          <source media="(min-width:821px)" srcSet={image1} />
          <source media="(min-width:415px)" srcSet={image1Tablet} />
          <img src={image1Mobile} alt={alt1} className="rounded-lg" />
        </picture>
        <p className="mt-8 desktop:mt-10 tablet:mt-10 mb-8 desktop:mb-9 tablet:mb-8 text-h5">
          {product1}
        </p>
        <Link to={link1}>
          <Button>SEE PRODUCT</Button>
        </Link>
      </article>
      <article className="flex flex-col items-center">
        <picture>
          <source media="(min-width:821px)" srcSet={image2} />
          <source media="(min-width:415px)" srcSet={image2Tablet} />
          <img src={image2Mobile} alt={alt2} className="rounded-lg" />
        </picture>

        <p className="mt-8 desktop:mt-10 tablet:mt-10 mb-8 desktop:mb-9 tablet:mb-8 text-h5">
          {product2}
        </p>
        <Link to={link2}>
          <Button>SEE PRODUCT</Button>
        </Link>
      </article>
      <article className="flex flex-col items-center">
        <picture>
          <source media="(min-width:821px)" srcSet={image3} />
          <source media="(min-width:415px)" srcSet={image3Tablet} />
          <img src={image3Mobile} alt={alt3} className="rounded-lg" />
        </picture>

        <p className="mt-8 desktop:mt-10 tablet:mt-10 mb-8 desktop:mb-9 tablet:mb-8 text-h5">
          {product3}
        </p>
        <Link to={link3}>
          <Button>SEE PRODUCT</Button>
        </Link>
      </article>
    </section>
  );
};

export default YouMayAlsoLike;
