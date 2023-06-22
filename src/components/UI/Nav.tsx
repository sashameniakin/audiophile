import { FC, useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import Cart from "./Cart";
import { ProductContext } from "../../context/context";
import { ProductsContextType } from "../../@types/products";
import CartProduct from "../CartProduct";
import Menu from "./Menu";
import Categories from "../Categories";

const Nav: FC = () => {
  const location = useLocation();
  const [visible, setVisible] = useState<boolean>(false);
  const [menu, setMenu] = useState<boolean>(false);

  const { products, removeProducts, totalPrice } = useContext(
    ProductContext
  ) as ProductsContextType;

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    removeProducts(products);
    localStorage.clear();
  }

  if (visible || menu) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }

  return (
    <nav
      className={`${
        location.pathname === "/"
          ? "bg-[url('./assets/images/image-header-mobile.jpg')] desktop:bg-[url('./assets/images/image-hero.jpg')] tablet:bg-[url('./assets/images/image-header.jpg')] bg-cover bg-no-repeat bg-center"
          : "bg-pureBlack"
      }`}
    >
      <section className="flex justify-between mx-auto w-[92%] tablet:w-[90%] desktop:w-[80%] pt-8 pb-9 border-b border-pureWhite/25">
        <div className="flex gap-10 desktop:hidden">
          <button onClick={() => setMenu(true)}>
            <img src="./images/shared/tablet/icon-hamburger.svg" alt="menu" />
          </button>
          <img
            src="./images/logo.svg"
            alt="logo"
            className="hidden tablet:flex desktop:hidden"
          />
        </div>
        <img
          src="./images/logo.svg"
          alt="logo"
          className="flex tablet:hidden desktop:flex"
        />
        <div className="hidden desktop:flex gap-[34px] text-pureWhite text-sub_title tracking-[2px]">
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
            ? "flex flex-col items-center desktop:items-start tablet:items-center mx-auto w-[92%] tablet:w-[90%] desktop:w-[80%] pt-[108px] desktop:pt-32 tablet:pt-[126px] pb-[112px] tablet:pb-[167px] desktop:pb-[158px] gap-4 desktop:gap-6 tablet:gap-6"
            : "hidden"
        }`}
      >
        <p className="text-overline text-pureWhite opacity-50">NEW PRODUCT</p>
        <h1 className="text-mobile_title desktop:text-h1 tablet:text-h1 text-center tablet:text-center desktop:text-left text-pureWhite">
          XX99 MARK II{<br />} HEADPHONES
        </h1>
        <p className="text-pureWhite opacity-75 text-center desktop:text-left tablet:text-center text-body w-[349px] pt-2 tablet:pt-0 desktop:pt-0 pb-3 tablet:pb-4 desktop:pb-4">
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
            ? "py-8 desktop:pt-[98px] tablet:pt-[105px] desktop:pb-[97px] tablet:pb-[97px] text-pureWhite text-center text-h4 desktop:text-h2 tablet:text-h2"
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
        <section className="flex flex-col px-[32px] pt-8">
          <div className="flex justify-between gap-[150px] mb-8">
            <p className="text-h6">CART ({products?.length || 0})</p>
            <button
              onClick={handleClick}
              className="text-body opacity-50 underline decoration-pureBlack/50 hover:text-orange hover:opacity-100 hover:decoration-orange"
            >
              Remove all
            </button>
          </div>
          <section className="flex flex-col">
            {products?.map((product, i) => (
              <CartProduct key={i} product={product} products={products} />
            ))}
          </section>
          <section className="flex justify-between pt-3 pb-6">
            <p className="text-body opacity-50">TOTAL</p>
            <p className="text-h6 tracking-normal">
              $ {totalPrice.toLocaleString()}
            </p>
          </section>
          <Link to="/checkout">
            <button
              onClick={() => setVisible(false)}
              className=" flex justify-center w-full mb-8 py-4  text-button bg-orange text-pureWhite hover:bg-secOrange"
            >
              CHECKOUT
            </button>
          </Link>
        </section>
      </Cart>
      {menu && (
        <Menu menu={menu} setMenu={setMenu}>
          <Categories menu />
        </Menu>
      )}
    </nav>
  );
};

export default Nav;
