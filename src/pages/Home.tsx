import { FC } from "react";
import Categories from "../components/Categories";
import Button from "../components/UI/Button";
import Gear from "../components/Gear";

const Home: FC = () => {
  return (
    <main className="desktop:w-[80%] tablet:w-[90%] mx-auto ">
      <Categories />
      <section className="bg-orange rounded-lg relative desktop:mb-12 tablet:mb-8 desktop:pb-0 tablet:pb-16 overflow-hidden">
        <img
          src="./images/pattern-circles.svg"
          alt="circles"
          className="absolute desktop:top-[-20px] tablet:-top-40 desktop:left-[-25px] tablet:left-0 desktop:w-[65%] tablet:w-full"
        />
        <article className="flex desktop:flex-row tablet:flex-col w-[70%] mx-auto justify-between items-center desktop:gap-36 tablet:gap-16">
          <img
            src="./images/home/image-speaker-zx9.png"
            alt="speaker"
            className="w-[44%] desktop:pt-24 tablet:pt-[52px] mb-[-7px] z-10"
          />
          <aside className="flex flex-col desktop:items-start tablet:items-center tablet:w-[70%] gap-6">
            <h1 className="text-h1 desktop:text-left tablet:text-center text-pureWhite">
              ZX9 SPEAKER
            </h1>
            <p className="text-pureWhite desktop:text-left tablet:text-center text-body opacity-75 pb-4">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Button secondary>SEE PRODUCT</Button>
          </aside>
        </article>
      </section>
      <section className="desktop:bg-[url('./assets/images/home/image-speaker-zx7.jpg')] tablet:bg-[url('./assets/images/home/tablet/image-speaker-zx7.jpg')] desktop:mb-12 tablet:mb-8 rounded-lg bg-cover bg-no-repeat bg-center">
        <aside className="flex flex-col desktop:pl-[95px] tablet:pl-[62px] py-[101px] gap-8">
          <p className="text-h4 ">ZX7 SPEAKER</p>
          <Button third>SEE PRODUCT</Button>
        </aside>
      </section>
      <section className="flex desktop:mb-[200px] tablet:mb-[96px] desktop:gap-[30px] tablet:gap-[11px]">
        <picture className="w-1/2">
          <source
            media="(min-width:821px)"
            srcSet="./images/home/image-earphones-yx1.jpg"
          />
          <source
            media="(min-width:415px)"
            srcSet="./images/home/tablet/image-earphones-yx1.jpg"
          />
          <img src="" alt="earphones" className="rounded-lg" />
        </picture>

        <article className="flex flex-col justify-center desktop:pl-[95px] tablet:pl-[41px] gap-8 bg-gray w-1/2 rounded-lg">
          <p className="text-h4">YX1 EARPHONES</p>
          <Button third>SEE PRODUCT</Button>
        </article>
      </section>
      <Gear />
    </main>
  );
};

export default Home;
