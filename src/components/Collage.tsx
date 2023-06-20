import { FC } from "react";

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
};

const Collage: FC<Props> = ({
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
}) => {
  return (
    <section className="grid grid-rows-2 grid-cols-5 desktop:gap-[30px] tablet:gap-[18px] desktop:mb-[160px] tablet:mb-[120px]">
      <picture className="row-start-1 row-end-2 col-start-1 col-end-3">
        <source media="(min-width:821px)" srcSet={image1} />
        <source media="(min-width:415px)" srcSet={image1Tablet} />
        <img src={image1Mobile} alt={alt1} className="rounded-lg h-full" />
      </picture>
      <picture className="row-start-2 row-end-3 col-start-1 col-end-3">
        <source media="(min-width:821px)" srcSet={image2} />
        <source media="(min-width:415px)" srcSet={image2Tablet} />
        <img src={image2Mobile} alt={alt2} className="rounded-lg h-full" />
      </picture>
      <picture className="row-start-1 row-end-3 col-start-3 col-end-6 rounded-lg">
        <source media="(min-width:821px)" srcSet={image3} />
        <source media="(min-width:415px)" srcSet={image3Tablet} />
        <img src={image3Mobile} alt={alt3} className="rounded-lg w-full" />
      </picture>
    </section>
  );
};

export default Collage;
