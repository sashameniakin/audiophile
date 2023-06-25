import { FC } from "react";
import Categories from "../components/Categories";
import Gear from "../components/Gear";
import { useNavigate } from "react-router-dom";
import MainProduct from "../components/MainPRoduct";
import ProductDescription from "../components/ProductDescription";
import Collage from "../components/Collage";
import YouMayAlsoLike from "../components/YouMayAlsoLike";

const XX99MarkI: FC = () => {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }
  return (
    <main className="w-[92%] desktop:w-[80%] tablet:w-[90%] mx-auto mt-4 desktop:mt-[79px] tablet:mt-[33px]">
      <button
        onClick={goBack}
        className="text-left text-body opacity-50 mb-6 desktop:mb-14 tablet:mb-6 hover:text-orange hover:opacity-100 hover:cursor-pointer"
      >
        Go Back
      </button>
      <MainProduct
        id="2"
        image="../images/product-xx99-mark-one-headphones/desktop/image-product.jpg"
        imageTablet="../images/product-xx99-mark-one-headphones/tablet/image-product.jpg"
        imageMobile="../images/product-xx99-mark-one-headphones/mobile/image-product.jpg"
        alt="markone"
        product="XX99 MARK I HEADPHONES"
        description="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
        price={1750}
        imgCart="../images/cart/image-xx99-mark-one-headphones.jpg"
        shortTitle="XX99 MK I"
      />
      <ProductDescription
        description1="As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz."
        description2="From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector."
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
        image1="../images/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg"
        image1Tablet="../images/product-xx99-mark-one-headphones/tablet/image-gallery-1.jpg"
        image1Mobile="../images/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg"
        image2="../images/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg"
        image2Tablet="../images/product-xx99-mark-one-headphones/tablet/image-gallery-2.jpg"
        image2Mobile="../images/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg"
        image3="../images/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg"
        image3Tablet="../images/product-xx99-mark-one-headphones/tablet/image-gallery-3.jpg"
        image3Mobile="../images/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg"
        alt1="image1"
        alt2="image2"
        alt3="image3"
      />

      <h3 className="text-description_title desktop:text-h3 tablet:text-h3 text-center mb-10 desktop:mb-16 tablet:mb-[56px]">
        YOU MAY ALSO LIKE
      </h3>
      <YouMayAlsoLike
        image1="../images/shared/image-xx99-mark-two-headphones.jpg"
        image1Tablet="../images/shared/tablet/image-xx99-mark-two-headphones.jpg"
        image1Mobile="../images/shared/mobile/image-xx99-mark-two-headphones.jpg"
        image2="../images/shared/image-xx59-headphones.jpg"
        image2Tablet="../images/shared/tablet/image-xx59-headphones.jpg"
        image2Mobile="../images/shared/mobile/image-xx59-headphones.jpg"
        image3="../images/shared/image-zx9-speaker.jpg"
        image3Tablet="../images/shared/tablet/image-zx9-speaker.jpg"
        image3Mobile="../images/shared/mobile/image-zx9-speaker.jpg"
        alt1="marktwo"
        alt2="xx59"
        alt3="speakerZX9"
        product1="XX99 MARK II"
        product2="XX59"
        product3="ZX9 SPEAKER"
        link1="/headphones/xx99-markII"
        link2="/headphones/xx59"
        link3="/speakers/zx9"
      />
      <Categories />
      <Gear />
    </main>
  );
};

export default XX99MarkI;
