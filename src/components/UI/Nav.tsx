import { FC, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import Cart from "./Cart";

const Nav: FC = () => {
  const location = useLocation();
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <nav
      className={`${
        location.pathname === "/"
          ? "bg-[url('./assets/images/image-hero.jpg')]  bg-cover bg-no-repeat bg-center"
          : "bg-pureBlack"
      }`}
    >
      <section className="flex justify-between mx-auto w-[80%] pt-8 pb-9 border-b border-pureWhite/25">
        <img src="./images/logo.svg" alt="logo" />
        <div className="flex gap-[34px] text-pureWhite text-sub_title tracking-[2px]">
          <Link to="/" className="hover:text-orange hover:cursor-pointer">
            HOME
          </Link>
          <Link
            to="/headphones"
            className="hover:text-orange hover:cursor-pointer"
          >
            HEADPHONES
          </Link>
          <Link
            to="/speakers"
            className="hover:text-orange hover:cursor-pointer"
          >
            SPEAKERS
          </Link>
          <Link
            to="/earphones"
            className="hover:text-orange hover:cursor-pointer"
          >
            EARPHONES
          </Link>
        </div>
        <button
          className="hover:cursor-pointer"
          onClick={() => setVisible(true)}
        >
          <img
            src="./images/icon-cart.svg"
            alt="cart"
            className="h-[23.33px]"
          />
        </button>
      </section>
      <aside
        className={`${
          location.pathname === "/"
            ? "flex flex-col mx-auto w-[80%] pt-32 pb-[158px] gap-6"
            : "hidden"
        }`}
      >
        <p className="text-overline text-pureWhite opacity-50">NEW PRODUCT</p>
        <h1 className="text-h1 text-pureWhite w-[396px]">
          XX99 MARK II HEADPHONES
        </h1>
        <p className="text-pureWhite opacity-75 text-body w-[349px] pb-4">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Link to="/headphones/xx99-markII">
          <Button>SEE PRODUCT</Button>
        </Link>
      </aside>
      <h2
        className={`${
          location.pathname === "/headphones" ||
          location.pathname === "/speakers" ||
          location.pathname === "/earphones"
            ? "pt-[98px] pb-[97px] text-pureWhite text-center text-h2"
            : "hidden"
        }`}
      >
        {location.pathname === "/headphones"
          ? "HEADPHONES"
          : location.pathname === "/speakers"
          ? "SPEAKERS"
          : "EARPHONES"}
      </h2>
      <Cart visible={visible} setVisible={setVisible}>
        <section className="flex flex-col">
          <div className="flex justify-between gap-[150px]">
            <p className="text-h6">CART</p>
            <p className="text-body opacity-50 underline decoration-pureBlack/50">
              Remove all
            </p>
          </div>
        </section>
      </Cart>
    </nav>
  );
};

export default Nav;
