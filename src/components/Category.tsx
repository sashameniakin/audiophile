import { FC } from "react";
import { Link } from "react-router-dom";

type Props = {
  category: string;
  image: string;
  alt: string;
  direction: string;
};

const Category: FC<Props> = ({ category, image, alt, direction }) => {
  return (
    <article className="flex flex-col w-full desktop:w-1/3 tablet:w-1/3 relative group hover:cursor-pointer">
      <Link to={direction} className="w-full flex  justify-center">
        <img
          src={image}
          alt={alt}
          className="w-[50%] desktop:w-[70%] tablet:w-[70%] absolute bottom-[100px] desktop:bottom-[60px] tablet:bottom-[110px]"
        />
        <section className="bg-gray w-full h-[204px] pb-[30px] flex flex-col justify-end items-center rounded-lg">
          <p className="text-h6 mb-[15px]">{category}</p>
          <div className="flex gap-3 items-center">
            <p className="text-button opacity-50 group-hover:text-orange group-hover:opacity-100">
              SHOP
            </p>
            <img
              src="../images/icon-arrow-right.svg"
              alt="arrow-right"
              className="w-[8px] h-[12px]"
            />
          </div>
        </section>
      </Link>
    </article>
  );
};

export default Category;
