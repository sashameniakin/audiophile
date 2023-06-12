import { FC } from "react";
import Button from "./UI/Button";
import { Link } from "react-router-dom";

type Props = {
  image1: string;
  image2: string;
  image3: string;
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
  image2,
  image3,
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
    <section className="flex gap-[30px] justify-between mb-[200px]">
      <article className="flex flex-col items-center">
        <img src={image1} alt={alt1} className="w-full rounded-lg" />
        <p className="mt-10 mb-9 text-h5">{product1}</p>
        <Link to={link1}>
          <Button>SEE PRODUCT</Button>
        </Link>
      </article>
      <article className="flex flex-col items-center">
        <img src={image2} alt={alt2} className="w-full rounded-lg" />
        <p className="mt-10 mb-9 text-h5">{product2}</p>
        <Link to={link2}>
          <Button>SEE PRODUCT</Button>
        </Link>
      </article>
      <article className="flex flex-col items-center">
        <img src={image3} alt={alt3} className="w-full rounded-lg" />
        <p className="mt-10 mb-9 text-h5">{product3}</p>
        <Link to={link3}>
          <Button>SEE PRODUCT</Button>
        </Link>
      </article>
    </section>
  );
};

export default YouMayAlsoLike;
