import { FC } from "react";
import Category from "./Category";

type Props = {
  menu?: boolean;
};

const Categories: FC<Props> = ({ menu }) => {
  return (
    <section
      className={`flex flex-col desktop:flex-row tablet:flex-row gap-20 desktop:gap-[30px] tablet:gap-[10px] ${
        menu
          ? "w-[90%] mx-auto pt-[106px] pb-[56px]"
          : "mt-[120px] desktop:mt-[270px] tablet:mt-[146px]"
      } mb-[120px] desktop:mb-[168px] tablet:mb-[96px] items-center justify-between`}
    >
      <Category
        category="HEADPHONES"
        image="../images/shared/category/image-category-thumbnail-headphones.png"
        alt="headphones"
        direction="/headphones"
      />

      <Category
        category="SPEAKERS"
        image="../images/shared/category/image-category-thumbnail-speakers.png"
        alt="speakers"
        direction="/speakers"
      />
      <Category
        category="EARPHONES"
        image="../images/shared/category/image-category-thumbnail-earphones.png"
        alt="earphones"
        direction="/earphones"
      />
    </section>
  );
};
export default Categories;
