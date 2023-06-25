import { FC } from "react";
import Categories from "../components/Categories";
import Button from "../components/UI/Button";
import Gear from "../components/Gear";

const Home: FC = () => {
  return (
    <main className="w-[92%] desktop:w-[80%] tablet:w-[90%] mx-auto">
      <Categories />
      <section className="bg-orange rounded-lg relative mb-6 desktop:mb-12 tablet:mb-8 desktop:pb-0 tablet:pb-16 overflow-hidden">
        <img
          src="./images/pattern-circles.svg"
          alt="circles"
          className="absolute -top-6 desktop:top-[-20px] tablet:-top-40 desktop:left-[-77px] tablet:left-0 desktop:w-[70%] tablet:w-full"
        />
        <article className="flex flex-col desktop:flex-row tablet:flex-col mx-auto justify-between items-center desktop:gap-32 tablet:gap-16">
          <picture className="flex items-start justify-center z-10 pt-[55px] pb-8 desktop:pb-0 desktop:mb-[-70px]">
            <source
              media="(min-width:821px)"
              srcSet="./images/home/image-speaker-zx9.png"
            />
            <source
              media="(min-width:415px)"
              srcSet="./images/home/tablet/image-speaker-zx9.png"
            />
            <img
              src="./images/home/mobile/image-speaker-zx9.png"
              alt="speaker"
              className="w-[60%] desktop:w-[80%] desktop:ml-10"
            />
          </picture>

          <aside className="flex flex-col items-center tablet:items-center desktop:items-start tablet:w-[70%] gap-6 pb-[55px] desktop:pb-[124px] desktop:pt-[133px] tablet:pb-0">
            <h1 className="text-mobile_title text-center desktop:text-h1  tablet:text-h1 desktop:text-left tablet:text-center text-pureWhite">
              ZX9{<br />}SPEAKER
            </h1>
            <p className="text-pureWhite text-center desktop:text-left tablet:text-center text-body opacity-75 pb-0 desktop:pb-4 tablet:pb-4">
              Upgrade to premium speakers that are{<br />} phenomenally built to
              deliver truly remarkable{<br />} sound.
            </p>
            <Button secondary>SEE PRODUCT</Button>
          </aside>
        </article>
      </section>
      <section className="bg-[url('./assets/images/home/mobile/image-speaker-zx7.jpg')] desktop:bg-[url('./assets/images/home/image-speaker-zx7.jpg')] tablet:bg-[url('./assets/images/home/tablet/image-speaker-zx7.jpg')] mb-6 desktop:mb-12 tablet:mb-8 rounded-lg bg-cover bg-no-repeat bg-center">
        <aside className="flex flex-col pl-6 desktop:pl-[95px] tablet:pl-[62px] py-[101px] gap-8">
          <p className="text-h4 ">ZX7 SPEAKER</p>
          <Button third>SEE PRODUCT</Button>
        </aside>
      </section>
      <section className="flex flex-col desktop:flex-row tablet:flex-row mb-[120px] desktop:mb-[200px] tablet:mb-[96px] gap-6 desktop:gap-[30px] tablet:gap-[11px]">
        <picture className="w-full desktop:w-1/2 tablet:w-1/2">
          <source
            media="(min-width:821px)"
            srcSet="./images/home/image-earphones-yx1.jpg"
          />
          <source
            media="(min-width:415px)"
            srcSet="./images/home/tablet/image-earphones-yx1.jpg"
          />
          <img
            src="./images/home/mobile/image-earphones-yx1.jpg"
            alt="earphones"
            className="rounded-lg"
          />
        </picture>

        <article className="flex flex-col justify-center pl-6 py-[41px] desktop:pl-[95px] tablet:pl-[41px] gap-8 bg-gray w-full desktop:w-1/2 tablet:w-1/2 rounded-lg">
          <p className="text-h4">YX1 EARPHONES</p>
          <Button third>SEE PRODUCT</Button>
        </article>
      </section>
      <Gear />
    </main>
  );
};

export default Home;
