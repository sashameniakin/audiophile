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
    <main className="w-[80%] mx-auto mt-[79px]">
      <button onClick={goBack} className="text-left text-body opacity-50 mb-14">
        Go Back
      </button>
      <MainProduct
        image="../images/product-xx99-mark-one-headphones/desktop/image-product.jpg"
        alt="markone"
        product="XX99 MARK I HEADPHONES"
        description="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
        price="$1,750"
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
        image2="../images/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg"
        image3="../images/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg"
        alt1="image1"
        alt2="image2"
        alt3="image3"
      />

      <h3 className="text-h3 text-center mb-16">YOU MAY ALSO LIKE</h3>
      <YouMayAlsoLike
        image1="../images/shared/image-xx99-mark-two-headphones.jpg"
        image2="../images/shared/image-xx59-headphones.jpg"
        image3="../images/shared/image-zx9-speaker.jpg"
        alt1="marktwo"
        alt2="xx59"
        alt3="speakerZX9"
        product1="XX99 MARK II"
        product2="XX59"
        product3="ZX9 SPEAKER"
      />
      <Categories />
      <Gear />
    </main>
  );
};

export default XX99MarkI;
