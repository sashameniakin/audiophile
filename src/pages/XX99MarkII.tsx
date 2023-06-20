import { FC } from "react";
import Categories from "../components/Categories";
import Gear from "../components/Gear";
import { useNavigate } from "react-router-dom";
import MainProduct from "../components/MainPRoduct";
import Collage from "../components/Collage";
import ProductDescription from "../components/ProductDescription";
import YouMayAlsoLike from "../components/YouMayAlsoLike";

const XX99MarkII: FC = () => {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <main className="desktop:w-[80%] tablet:w-[90%] mx-auto desktop:mt-[79px] tablet:mt-[33px]">
      <button
        onClick={goBack}
        className="text-left text-body opacity-50 desktop:mb-14 tablet:mb-6"
      >
        Go Back
      </button>
      <MainProduct
        id="3"
        image="../images/product-xx99-mark-two-headphones/desktop/image-product.jpg"
        imageTablet="../images/product-xx99-mark-two-headphones/tablet/image-product.jpg"
        imageMobile="../images/product-xx99-mark-two-headphones/mobile/image-product.jpg"
        alt="marktwo"
        new_product
        product="XX99 MARK II HEADPHONES"
        description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
        price={2999}
        imgCart="../images/cart/image-xx99-mark-two-headphones.jpg"
        shortTitle="XX99 MK II"
      />

      <ProductDescription
        description1="Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat."
        description2="The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic."
        position1="Headphone Unit"
        position2="Replacement Earcups"
        position3="User Manual"
        position4="3.5mm 5m Audio Cable"
        position5="Travel Bag"
        pos1quantity="1x"
        pos2quantity="2x"
        pos3quantity="1x"
        pos4quantity="1x"
        pos5quantity="1x"
      />

      <Collage
        image1="../images/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg"
        image1Tablet="../images/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg"
        image1Mobile="../images/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg"
        image2="../images/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg"
        image2Tablet="../images/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg"
        image2Mobile="../images/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg"
        image3="../images/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg"
        image3Tablet="../images/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg"
        image3Mobile="../images/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg"
        alt1="image1"
        alt2="image2"
        alt3="image3"
      />

      <h3 className="text-h3 text-center desktop:mb-16 tablet:mb-[56px]">
        YOU MAY ALSO LIKE
      </h3>
      <YouMayAlsoLike
        image1="../images/shared/image-xx99-mark-one-headphones.jpg"
        image1Tablet="../images/shared/tablet/image-xx99-mark-one-headphones.jpg"
        image1Mobile="../images/shared/mobile/image-xx99-mark-one-headphones.jpg"
        image2="../images/shared/image-xx59-headphones.jpg"
        image2Tablet="../images/shared/tablet/image-xx59-headphones.jpg"
        image2Mobile="../images/shared/mobile/image-xx59-headphones.jpg"
        image3="../images/shared/image-zx9-speaker.jpg"
        image3Tablet="../images/shared/tablet/image-zx9-speaker.jpg"
        image3Mobile="../images/shared/mobile/image-zx9-speaker.jpg"
        alt1="markone"
        alt2="xx59"
        alt3="speakerZX9"
        product1="XX99 MARK I"
        product2="XX59"
        product3="ZX9 SPEAKER"
        link1="/headphones/xx99-markI"
        link2="/headphones/xx59"
        link3="/speakers/zx9"
      />

      <Categories />
      <Gear />
    </main>
  );
};

export default XX99MarkII;
