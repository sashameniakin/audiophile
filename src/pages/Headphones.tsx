import { FC } from "react";
import Product from "../components/Product";
import Categories from "../components/Categories";
import Gear from "../components/Gear";

const Headphones: FC = () => {
  return (
    <main className="w-[80%] mx-auto mt-[160px]">
      <Product
        image="./images/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"
        alt="mark-2"
        new_product
        product="XX99 MARK II HEADPHONES"
        description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
      />
      <Product
        direction_reverse
        image="./images/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg"
        alt="mark-1"
        product="XX99 MARK I HEADPHONES"
        description="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
      />
      <Product
        image="./images/product-xx59-headphones/desktop/image-category-page-preview.jpg"
        alt="xx59"
        product="XX59 HEADPHONES"
        description="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
      />
      <Categories />
      <Gear />
    </main>
  );
};

export default Headphones;
