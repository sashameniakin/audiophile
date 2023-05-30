import { FC } from "react";
import Category from "../components/Home/Category";
import Button from "../components/UI/Button";

const Home: FC = () => {
  return (
    <>
      <section className="flex gap-[30px] w-[80%] mx-auto mt-[180px] mb-[168px] items-center justify-between">
        <Category
          category="HEADPHONES"
          image="./images/home/image-category-thumbnail-headphones.png"
          alt="headphones"
        />
        <Category
          category="SPEAKERS"
          image="./images/home/image-category-thumbnail-speakers.png"
          alt="speakers"
        />
        <Category
          category="EARPHONES"
          image="./images/home/image-category-thumbnail-earphones.png"
          alt="earphones"
        />
      </section>
      <section className="bg-orange w-[80%] mx-auto rounded-lg relative mb-12 overflow-hidden">
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
    </>
  );
};

export default Home;
