import { FC } from "react";

type Props = {
  category: string;
  image: string;
  alt: string;
};

const Category: FC<Props> = ({ category, image, alt }) => {
  return (
    <article className="flex flex-col items-center relative group hover:cursor-pointer">
      <img src={image} alt={alt} className="w-[70%] absolute bottom-[60px]" />
      <section className="bg-gray w-[350px] h-[204px] pb-[30px] flex flex-col justify-end items-center rounded-lg">
        <p className="text-h6 mb-[15px]">{category}</p>
        <div className="flex gap-3 items-center">
          <p className="text-button opacity-50 group-hover:text-orange group-hover:opacity-100">
            SHOP
          </p>
          <img
            src="./images/icon-arrow-right.svg"
            alt="arrow-right"
            className="w-[8px] h-[12px]"
          />
        </div>
      </section>
    </article>
  );
};

export default Category;
