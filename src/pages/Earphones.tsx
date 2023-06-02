import { FC } from "react";
import Categories from "../components/Categories";
import Gear from "../components/Gear";
import Product from "../components/Product";

const Earphones: FC = () => {
  return (
    <main className="w-[80%] mx-auto mt-[160px]">
      <Product
        image="./images/product-yx1-earphones/desktop/image-category-page-preview.jpg"
        alt="yx1-earphones"
        new_product
        product="YX1 WIRELESS EARPHONES"
        description="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
      />
      <Categories />
      <Gear />
    </main>
  );
};

export default Earphones;
