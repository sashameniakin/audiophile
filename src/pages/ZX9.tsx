import { FC } from "react";
import Categories from "../components/Categories";
import Gear from "../components/Gear";
import { useNavigate } from "react-router-dom";
import MainProduct from "../components/MainPRoduct";
import ProductDescription from "../components/ProductDescription";
import Collage from "../components/Collage";
import YouMayAlsoLike from "../components/YouMayAlsoLike";

const ZX9: FC = () => {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }
  return (
    <main className="w-[92%] desktop:w-[80%] tablet:w-[90%] mt-4 mx-auto desktop:mt-[79px] tablet:mt-[33px]">
      <button
        onClick={goBack}
        className="text-left text-body opacity-50 mb-6 desktop:mb-14 tablet:mb-6"
      >
        Go Back
      </button>
      <MainProduct
        id="6"
        image="../images/product-zx9-speaker/desktop/image-product.jpg"
        imageTablet="../images/product-zx9-speaker/tablet/image-product.jpg"
        imageMobile="../images/product-zx9-speaker/mobile/image-product.jpg"
        alt="ZX9"
        product="ZX9 SPEAKER"
        new_product
        description="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
        price={4500}
        imgCart="../images/cart/image-zx9-speaker.jpg"
        shortTitle="ZX9"
      />
      <ProductDescription
        description1="Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m)."
        description2="Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms."
        position1="Speaker Unit"
        position2="Speaker Cloth Panel"
        position3="User Manual"
        position4="3.5mm 10m Audio Cable"
        position5="10m Optical Cable"
        pos1quantity="2x"
        pos2quantity="2x"
        pos3quantity="1x"
        pos4quantity="1x"
        pos5quantity="1x"
      />
      <Collage
        image1="../images/product-zx9-speaker/desktop/image-gallery-1.jpg"
        image1Tablet="../images/product-zx9-speaker/tablet/image-gallery-1.jpg"
        image1Mobile="../images/product-zx9-speaker/mobile/image-gallery-1.jpg"
        image2="../images/product-zx9-speaker/desktop/image-gallery-2.jpg"
        image2Tablet="../images/product-zx9-speaker/tablet/image-gallery-2.jpg"
        image2Mobile="../images/product-zx9-speaker/mobile/image-gallery-2.jpg"
        image3="../images/product-zx9-speaker/desktop/image-gallery-3.jpg"
        image3Tablet="../images/product-zx9-speaker/tablet/image-gallery-3.jpg"
        image3Mobile="../images/product-zx9-speaker/mobile/image-gallery-3.jpg"
        alt1="image1"
        alt2="image2"
        alt3="image3"
      />
      <h3 className="text-description_title desktop:text-h3 tablet:text-h3 text-center mb-10 desktop:mb-16 tablet:mb-[56px]">
        YOU MAY ALSO LIKE
      </h3>
      <YouMayAlsoLike
        image1="../images/shared/image-zx7-speaker.jpg"
        image1Tablet="../images/shared/tablet/image-zx7-speaker.jpg"
        image1Mobile="../images/shared/mobile/image-zx7-speaker.jpg"
        image2="../images/shared/image-xx99-mark-one-headphones.jpg"
        image2Tablet="../images/shared/tablet/image-xx99-mark-one-headphones.jpg"
        image2Mobile="../images/shared/mobile/image-xx99-mark-one-headphones.jpg"
        image3="../images/shared/image-xx59-headphones.jpg"
        image3Tablet="../images/shared/tablet/image-xx59-headphones.jpg"
        image3Mobile="../images/shared/mobile/image-xx59-headphones.jpg"
        alt1="zx7"
        alt2="markone"
        alt3="XX59"
        product1="ZX7 SPEAKER"
        product2="XX99 MARK I"
        product3="XX59"
        link1="/speakers/zx7"
        link2="/headphones/xx99-markI"
        link3="/headphones/xx59"
      />
      <Categories />
      <Gear />
    </main>
  );
};

export default ZX9;
