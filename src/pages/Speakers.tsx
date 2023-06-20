import { FC } from "react";
import Categories from "../components/Categories";
import Gear from "../components/Gear";
import Product from "../components/Product";

const Speakers: FC = () => {
  return (
    <main className="desktop:w-[80%] tablet:w-[90%] mx-auto desktop:mt-[160px] tablet:mt-[120px]">
      <Product
        image="./images/product-zx9-speaker/desktop/image-category-page-preview.jpg"
        imageTablet="./images/product-zx9-speaker/tablet/image-category-page-preview.jpg"
        imageMobile="./images/product-zx9-speaker/mobile/image-category-page-preview.jpg"
        alt="zx9-speaker"
        new_product
        product="ZX9 SPEAKER"
        description="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
        to="/speakers/zx9"
      />
      <Product
        direction_reverse
        image="./images/product-zx7-speaker/desktop/image-category-page-preview.jpg"
        imageTablet="./images/product-zx7-speaker/tablet/image-category-page-preview.jpg"
        imageMobile="./images/product-zx7-speaker/mobile/image-category-page-preview.jpg"
        alt="zx7-speaker"
        product="ZX7 SPEAKER"
        description="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
        to="/speakers/zx7"
      />
      <Categories />
      <Gear />
    </main>
  );
};

export default Speakers;
