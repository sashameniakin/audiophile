import { FC } from "react";
import Categories from "../components/Categories";
import Button from "../components/UI/Button";
import Gear from "../components/Gear";

const Home: FC = () => {
  return (
    <main className="w-[80%] mx-auto ">
      <Categories />
      <section className="bg-orange rounded-lg relative mb-12 overflow-hidden">
        <img
          src="./images/pattern-circles.svg"
          alt="circles"
          className="absolute top-[-20px] left-[-25px] w-[65%]"
        />
        <article className="flex w-[70%] mx-auto justify-between items-center gap-36">
          <img
            src="./images/home/image-speaker-zx9.png"
            alt="speaker"
            className="w-[44%] pt-24 mb-[-7px] z-10"
          />
          <aside className="flex flex-col gap-6">
            <h1 className="text-h1 text-pureWhite">ZX9 SPEAKER</h1>
            <p className="text-pureWhite text-body opacity-75 pb-4">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Button secondary>SEE PRODUCT</Button>
          </aside>
        </article>
      </section>
      <section className="bg-[url('./assets/images/home/image-speaker-zx7.jpg')]  mb-12 rounded-lg bg-cover bg-no-repeat bg-center">
        <aside className="flex flex-col pl-[95px] py-[101px] gap-8">
          <p className="text-h4 ">ZX7 SPEAKER</p>
          <Button third>SEE PRODUCT</Button>
        </aside>
      </section>
      <section className="flex mb-[200px] gap-[30px]">
        <img
          src="./images/home/image-earphones-yx1.jpg"
          alt="eerphones"
          className="rounded-lg w-1/2"
        />
        <article className="flex flex-col justify-center pl-[95px] gap-8 bg-gray w-1/2 rounded-lg">
          <p className="text-h4">YX1 EARPHONES</p>
          <Button third>SEE PRODUCT</Button>
        </article>
      </section>
      <Gear />
    </main>
  );
};

export default Home;
