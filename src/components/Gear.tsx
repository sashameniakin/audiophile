import { FC } from "react";

const Gear: FC = () => {
  return (
    <section className="flex mb-[200px] gap-[30px]">
      <article className="flex flex-col justify-center w-1/2 gap-8 pr-[10%]">
        <p className="text-h2">
          BRINGING YOU THE <span className="text-orange">BEST</span> AUDIO GEAR
        </p>
        <p className="text-body opacity-50">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </article>
      <img
        src="./images/home/image-best-gear.jpg"
        alt="best-gear"
        className="rounded-lg w-1/2"
      />
    </section>
  );
};
export default Gear;
