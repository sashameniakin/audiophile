import { FC } from "react";
import Category from "./Category";

const Categories: FC = () => {
  return (
    <section className="flex gap-[30px] mt-[180px] mb-[168px] items-center justify-between">
      <Category
        category="HEADPHONES"
        image="./images/home/image-category-thumbnail-headphones.png"
        alt="headphones"
        direction="/headphones"
      />

      <Category
        category="SPEAKERS"
        image="./images/home/image-category-thumbnail-speakers.png"
        alt="speakers"
        direction="/speakers"
      />
      <Category
        category="EARPHONES"
        image="./images/home/image-category-thumbnail-earphones.png"
        alt="earphones"
        direction="/earphones"
      />
    </section>
  );
};
export default Categories;
