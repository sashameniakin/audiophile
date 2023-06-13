import { FC } from "react";
import Categories from "../components/Categories";
import Gear from "../components/Gear";
import { useNavigate } from "react-router-dom";
import MainProduct from "../components/MainPRoduct";
import ProductDescription from "../components/ProductDescription";
import Collage from "../components/Collage";
import YouMayAlsoLike from "../components/YouMayAlsoLike";

const YX1: FC = () => {
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
        /*   id="4" */
        image="../images/product-yx1-earphones/desktop/image-product.jpg"
        alt="YX1"
        new_product
        product="YX1 WIRELESS EARPHONES"
        description="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
        price="$599"
      />
      <ProductDescription
        description1="Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound."
        description2="The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black."
        position1="Earphone Unit"
        position2="Multi-size Earplugs"
        position3="User Manual"
        position4="USB-C Charging Cable"
        position5="Travel Pouch"
        pos1quantity="2x"
        pos2quantity="6x"
        pos3quantity="1x"
        pos4quantity="1x"
        pos5quantity="1x"
      />
      <Collage
        image1="../images/product-yx1-earphones/desktop/image-gallery-1.jpg"
        image2="../images/product-yx1-earphones/desktop/image-gallery-2.jpg"
        image3="../images/product-yx1-earphones/desktop/image-gallery-3.jpg"
        alt1="image1"
        alt2="image2"
        alt3="image3"
      />
      <h3 className="text-h3 text-center mb-16">YOU MAY ALSO LIKE</h3>
      <YouMayAlsoLike
        image1="../images/shared/image-xx99-mark-one-headphones.jpg"
        image2="../images/shared/image-xx59-headphones.jpg"
        image3="../images/shared/image-zx9-speaker.jpg"
        alt1="markone"
        alt2="XX59"
        alt3="ZX9"
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

export default YX1;
