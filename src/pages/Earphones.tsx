import { FC } from "react";
import Categories from "../components/Categories";
import Gear from "../components/Gear";
import Product from "../components/Product";

const Earphones: FC = () => {
  return (
    <main className="desktop:w-[80%] tablet:w-[90%] mx-auto desktop:mt-[160px] tablet:mt-[120px]">
      <Product
        image="./images/product-yx1-earphones/desktop/image-category-page-preview.jpg"
        imageTablet="./images/product-yx1-earphones/tablet/image-category-page-preview.jpg"
        imageMobile="./images/product-yx1-earphones/mobile/image-category-page-preview.jpg"
        alt="yx1-earphones"
        new_product
        product="YX1 WIRELESS EARPHONES"
        description="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
        to="/earphones/yx1"
      />
      <Categories />
      <Gear />
    </main>
  );
};

export default Earphones;
