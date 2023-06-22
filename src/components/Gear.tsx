import { FC } from "react";

const Gear: FC = () => {
  return (
    <section className="flex flex-col-reverse desktop:flex-row tablet:flex-col-reverse items-center mb-[120px] desktop:mb-[200px] tablet:mb-[96px] gap-[40px] desktop:gap-[30px] tablet:gap-[63px]">
      <article className="flex flex-col justify-center desktop:w-1/2 tablet:w-[80%] gap-8 desktop:pr-[10%] tablet:pr-0">
        <p className="text-tablet_title desktop:text-h2 tablet:text-h2 text-center desktop:text-left tablet:text-center">
          BRINGING YOU THE <span className="text-orange">BEST</span> AUDIO GEAR
        </p>
        <p className="text-body text-center desktop:text-left tablet:text-center opacity-50">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </article>
      <picture className="desktop:w-1/2 tablet:w-full">
        <source
          media="(min-width:821px)"
          srcSet="../images/shared/image-best-gear.jpg"
        />
        <source
          media="(min-width:415px)"
          srcSet="../images/shared/tablet/image-best-gear.jpg"
        />
        <img
          src="../images/shared/mobile/image-best-gear.jpg"
          alt="best-gear"
          className="rounded-lg"
        />
      </picture>
    </section>
  );
};
export default Gear;
