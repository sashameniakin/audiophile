import { FC } from "react";
import Product from "../components/Product";
import Categories from "../components/Categories";
import Gear from "../components/Gear";

const Headphones: FC = () => {
  return (
    <main className="w-[92%] desktop:w-[80%] tablet:w-[90%] mx-auto mt-16 desktop:mt-[160px] tablet:mt-[120px]">
      <Product
        image="./images/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"
        imageTablet="./images/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg"
        imageMobile="./images/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg"
        alt="mark-2"
        new_product
        product="XX99 MARK II HEADPHONES"
        description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
        to="/headphones/xx99-markII"
      />
      <Product
        direction_reverse
        image="./images/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg"
        imageTablet="./images/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg"
        imageMobile="./images/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg"
        alt="mark-1"
        product="XX99 MARK I HEADPHONES"
        description="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
        to="/headphones/xx99-markI"
      />
      <Product
        image="./images/product-xx59-headphones/desktop/image-category-page-preview.jpg"
        imageTablet="./images/product-xx59-headphones/tablet/image-category-page-preview.jpg"
        imageMobile="./images/product-xx59-headphones/mobile/image-category-page-preview.jpg"
        alt="xx59"
        product="XX59 HEADPHONES"
        description="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
        to="/headphones/xx59"
      />
      <Categories />
      <Gear />
    </main>
  );
};

export default Headphones;
