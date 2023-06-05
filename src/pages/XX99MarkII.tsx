import { FC } from "react";
import Categories from "../components/Categories";
import Gear from "../components/Gear";
import Button from "../components/UI/Button";
import { useNavigate } from "react-router-dom";
import MainProduct from "../components/MainPRoduct";

const XX99MarkII: FC = () => {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <main className="w-[80%] mx-auto mt-[79px]">
      <section>
        <button
          onClick={goBack}
          className="text-left text-body opacity-50 mb-14"
        >
          Go Back
        </button>
        <MainProduct
          image="../images/product-xx99-mark-two-headphones/desktop/image-product.jpg"
          alt="marktwo"
          new_product
          product="XX99 MARK II HEADPHONES"
          description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
          price="$2,999"
        />
      </section>
      <section className="flex gap-[125px]">
        <article className="flex flex-col w-[55%]">
          <p className="text-h3">FEATURES</p>
          <p>
            Featuring a genuine leather head strap and premium earcups, these
            headphones deliver superior comfort for those who like to enjoy
            endless listening. It includes intuitive controls designed for any
            situation. Whether you’re taking a business call or just in your own
            personal space, the auto on/off and pause features ensure that
            you’ll never miss a beat.
          </p>
          <p>
            The advanced Active Noise Cancellation with built-in equalizer allow
            you to experience your audio world on your terms. It lets you enjoy
            your audio in peace, but quickly interact with your surroundings
            when you need to. Combined with Bluetooth 5. 0 compliant
            connectivity and 17 hour battery life, the XX99 Mark II headphones
            gives you superior sound, cutting-edge technology, and a modern
            design aesthetic.
          </p>
        </article>
        <aside>
          <p className="text-h3">IN THE BOX</p>
        </aside>
      </section>
      <h3 className="text-h3 text-center mb-16">YOU MAY ALSO LIKE</h3>
      <section className="flex gap-[30px] justify-between mb-[300px]">
        <article className="flex flex-col items-center">
          <img
            src="../images/shared/image-xx99-mark-one-headphones.jpg"
            alt="markone"
            className="w-full rounded-lg"
          />
          <p className="mt-10 mb-9 text-h5">XX99 MARK I</p>
          <Button>SEE PRODUCT</Button>
        </article>
        <article className="flex flex-col items-center">
          <img
            src="../images/shared/image-xx59-headphones.jpg"
            alt=""
            className="w-full rounded-lg"
          />
          <p className="mt-10 mb-9 text-h5">XX59</p>
          <Button>SEE PRODUCT</Button>
        </article>
        <article className="flex flex-col items-center">
          <img
            src="../images/shared/image-zx9-speaker.jpg"
            alt=""
            className="w-full rounded-lg"
          />
          <p className="mt-10 mb-9 text-h5">ZX9 SPEAKER</p>
          <Button>SEE PRODUCT</Button>
        </article>
      </section>

      <Categories />
      <Gear />
    </main>
  );
};

export default XX99MarkII;
