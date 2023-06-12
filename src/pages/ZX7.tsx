import { FC } from "react";
import Categories from "../components/Categories";
import Gear from "../components/Gear";
import { useNavigate } from "react-router-dom";
import MainProduct from "../components/MainPRoduct";
import ProductDescription from "../components/ProductDescription";
import Collage from "../components/Collage";
import YouMayAlsoLike from "../components/YouMayAlsoLike";

const ZX7: FC = () => {
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
        image="../images/product-zx7-speaker/desktop/image-product.jpg"
        alt="ZX7"
        product="ZX7 SPEAKER"
        description="Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
        price="$3,500"
      />
      <ProductDescription
        description1="Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage."
        description2="The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience."
        position1="Speaker Unit"
        position2="Speaker Cloth Panel"
        position3="User Manual"
        position4="3.5mm 7m Audio Cable"
        position5="7.5m Optical Cable"
        pos1quantity="2x"
        pos2quantity="2x"
        pos3quantity="1x"
        pos4quantity="1x"
        pos5quantity="1x"
      />
      <Collage
        image1="../images/product-zx7-speaker/desktop/image-gallery-1.jpg"
        image2="../images/product-zx7-speaker/desktop/image-gallery-2.jpg"
        image3="../images/product-zx7-speaker/desktop/image-gallery-3.jpg"
        alt1="image1"
        alt2="image2"
        alt3="image3"
      />
      <h3 className="text-h3 text-center mb-16">YOU MAY ALSO LIKE</h3>
      <YouMayAlsoLike
        image1="../images/shared/image-zx9-speaker.jpg"
        image2="../images/shared/image-xx99-mark-one-headphones.jpg"
        image3="../images/shared/image-xx59-headphones.jpg"
        alt1="zx9"
        alt2="markone"
        alt3="XX59"
        product1="ZX9 SPEAKER"
        product2="XX99 MARK I"
        product3="XX59"
        link1="/speakers/zx9"
        link2="/headphones/xx99-markI"
        link3="/headphones/xx59"
      />
      <Categories />
      <Gear />
    </main>
  );
};

export default ZX7;
