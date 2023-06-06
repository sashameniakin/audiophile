import { FC } from "react";

type Props = {
  image1: string;
  image2: string;
  image3: string;
  alt1: string;
  alt2: string;
  alt3: string;
};

const Collage: FC<Props> = ({ image1, image2, image3, alt1, alt2, alt3 }) => {
  return (
    <section className="grid grid-rows-2 grid-cols-5 gap-[30px] mb-[160px]">
      <img
        src={image1}
        alt={alt1}
        className="row-start-1 row-end-2 col-start-1 col-end-3 h-full rounded-lg"
      />
      <img
        src={image2}
        alt={alt2}
        className="row-start-2 row-end-3 col-start-1 col-end-3 h-full rounded-lg"
      />
      <img
        src={image3}
        alt={alt3}
        className="row-start-1 row-end-3 col-start-3 col-end-6 rounded-lg w-full"
      />
    </section>
  );
};

export default Collage;
