import { FC } from "react";
import Categories from "../components/Categories";
import Gear from "../components/Gear";
import { useNavigate } from "react-router-dom";
import MainProduct from "../components/MainPRoduct";
import ProductDescription from "../components/ProductDescription";
import Collage from "../components/Collage";
import YouMayAlsoLike from "../components/YouMayAlsoLike";

const XX59: FC = () => {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }
  return (
    <main className="w-[80%] mx-auto mt-[79px]">
      <button onClick={goBack} className="text-left text-body opacity-50 mb-14">
        Go Back
      </button>
      <MainProduct
        image="../images/product-xx59-headphones/desktop/image-product.jpg"
        alt="XX59"
        product="XX59 HEADPHONES"
        description="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
        price="$899"
      />
      <ProductDescription
        description1="These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos."
        description2="More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C."
        position1="Headphone Unit"
        position2="Replacement Earcups"
        position3="User Manual"
        position4="3.5mm 5m Audio Cable"
        pos1quantity="1x"
        pos2quantity="2x"
        pos3quantity="1x"
        pos4quantity="1x"
      />
      <Collage
        image1="../images/product-xx59-headphones/desktop/image-gallery-1.jpg"
        image2="../images/product-xx59-headphones/desktop/image-gallery-2.jpg"
        image3="../images/product-xx59-headphones/desktop/image-gallery-3.jpg"
        alt1="image1"
        alt2="image2"
        alt3="image3"
      />
      <h3 className="text-h3 text-center mb-16">YOU MAY ALSO LIKE</h3>
      <YouMayAlsoLike
        image1="../images/shared/image-xx99-mark-two-headphones.jpg"
        image2="../images/shared/image-xx99-mark-one-headphones.jpg"
        image3="../images/shared/image-zx9-speaker.jpg"
        alt1="marktwo"
        alt2="markone"
        alt3="speakerZX9"
        product1="XX99 MARK II"
        product2="XX99 MARK I"
        product3="ZX9 SPEAKER"
      />
      <Categories />
      <Gear />
    </main>
  );
};

export default XX59;
