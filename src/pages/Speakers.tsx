import { FC } from "react";
import Categories from "../components/Categories";
import Gear from "../components/Gear";
import Product from "../components/Product";
import { Link } from "react-router-dom";

const Speakers: FC = () => {
  return (
    <main className="w-[80%] mx-auto mt-[160px]">
      <Link to="/speakers/zx9">
        <Product
          image="./images/product-zx9-speaker/desktop/image-category-page-preview.jpg"
          alt="zx9-speaker"
          new_product
          product="ZX9 SPEAKER"
          description="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
        />
      </Link>
      <Link to="/speakers/zx7">
        <Product
          direction_reverse
          image="./images/product-zx7-speaker/desktop/image-category-page-preview.jpg"
          alt="zx7-speaker"
          product="ZX7 SPEAKER"
          description="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
        />
      </Link>
      <Categories />
      <Gear />
    </main>
  );
};

export default Speakers;
