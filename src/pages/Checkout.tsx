import { FC, useContext, useState } from "react";
import CartProduct from "../components/CartProduct";
import { ProductContext } from "../context/context";
import { ProductsContextType } from "../@types/products";
import Button from "../components/UI/Button";
import { Link, useNavigate } from "react-router-dom";
import Confirmation from "../components/UI/Confirmation";

const Checkout: FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const { products, totalPrice } = useContext(
    ProductContext
  ) as ProductsContextType;

  const [payment, setPayment] = useState<boolean>(false);
  const [cash, setCash] = useState<boolean>(false);
  const [showItems, setShowItems] = useState<boolean>(false);

  function cashDelivery() {
    setCash(true);
    setPayment(false);
  }

  function eMoney() {
    setCash(false);
    setPayment(true);
  }

  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setVisible(true);
  }

  if (visible) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }

  return (
    <main className="bg-gray ">
      <section className="w-[92%] desktop:w-[80%] tablet:w-[90%] mx-auto">
        <button
          onClick={goBack}
          className="pt-4 desktop:pt-[79px] tablet:pt-12 pb-6 desktop:pb-[38px] tablet:pb-6 w-fit text-body opacity-50 hover:text-orange hover:opacity-100 hover:cursor-pointer"
        >
          Go Back
        </button>
        <form className="flex flex-col desktop:flex-row tablet:flex-col gap-[30px]">
          <section className="bg-pureWhite desktop:w-2/3 tablet:w-full px-[28px] desktop:mb-[141px] tablet:mb-0 rounded-lg">
            <p className="pt-6 desktop:pt-[54px] tablet:pt-[30px] text-tablet_title desktop:text-h3 tablet:text-h3 mb-8 desktop:mb-[41px] tablet:mb-[41px]">
              CHECKOUT
            </p>
            <fieldset>
              <legend className="text-sub_title text-orange mb-4">
                BILLING DETAILS
              </legend>
              <section className="flex flex-col desktop:flex-row tablet:flex-row gap-4">
                <label
                  className="text-checkout flex flex-col w-full desktop:w-1/2 tablet:w-1/2"
                  htmlFor="name"
                >
                  Name
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="text-checkbox outline-none border-[1px] mt-2 border-inputBorder rounded-lg pl-6 py-5 focus:border-orange caret-orange"
                    placeholder="Alexei Ward"
                  />
                </label>

                <label className="text-checkout email-label flex flex-col mt-[9px] desktop:mt-0 tablet:mt-0 w-full desktop:w-1/2 tablet:w-1/2">
                  <div className="flex justify-between">
                    <p>Email Address</p>
                    <p className="hidden">Wrong format</p>
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="text-checkbox outline-none mt-2 border-[1px] border-inputBorder rounded-lg pl-6 py-5 focus:border-orange focus:invalid:border-invalid focus:invalid:border-[2px] focus:invalid:text-pureBlack focus:invalid:pb-4 caret-orange"
                    placeholder="alexei@mail.com"
                  />
                </label>
              </section>

              <label
                className="text-checkout flex flex-col mt-6 w-full desktop:w-1/2 tablet:w-1/2 pr-0 desktop:pr-2 tablet:pr-2"
                htmlFor="phone-number"
              >
                Phone Number
                <input
                  type="text"
                  name="phone-number"
                  id="phone-number"
                  className="text-checkbox outline-none border-[1px] mt-2 border-inputBorder rounded-lg pl-6 py-5 focus:border-orange caret-orange"
                  placeholder="+1 202-555-0136"
                />
              </label>
            </fieldset>
            <fieldset className="mt-[53px]">
              <legend className="text-sub_title text-orange mb-4">
                SHIPPING INFO
              </legend>

              <label className="text-checkout flex flex-col" htmlFor="address">
                Address
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="text-checkbox outline-none mt-2 border-[1px] border-inputBorder rounded-lg pl-6 py-5 focus:border-orange caret-orange"
                  placeholder="1137 Williams Avenue"
                />
              </label>

              <section className="flex flex-col desktop:flex-row tablet:flex-row gap-4 mt-6">
                <label
                  className="text-checkout flex flex-col w-full desktop:w-1/2 tablet:w-1/2"
                  htmlFor="zip-code"
                >
                  ZIP Code
                  <input
                    type="text"
                    name="zip-code"
                    id="zip-code"
                    className="text-checkbox outline-none border-[1px] mt-2 border-inputBorder rounded-lg pl-6 py-5 focus:border-orange caret-orange"
                    placeholder="10001"
                  />
                </label>

                <label
                  className="text-checkout  flex flex-col w-full desktop:w-1/2 tablet:w-1/2"
                  htmlFor="city"
                >
                  City
                  <input
                    type="text"
                    name="city"
                    id="city"
                    className="text-checkbox outline-none border-[1px] border-inputBorder mt-2 rounded-lg pl-6 py-5 focus:border-orange caret-orange"
                    placeholder="New York"
                  />
                </label>
              </section>

              <label
                className="text-checkout flex flex-col w-full desktop:w-1/2 tablet:w-1/2 pr-0 desktop:pr-2 tablet:pr-2 mt-6"
                htmlFor="city"
              >
                Country
                <input
                  type="text"
                  name="country"
                  id="country"
                  className="text-checkbox outline-none border-[1px] border-inputBorder mt-2 rounded-lg pl-6 py-5 focus:border-orange caret-orange"
                  placeholder="United States"
                />
              </label>
            </fieldset>
            <fieldset className="mt-[61px]">
              <legend className="text-sub_title text-orange mb-4">
                PAYMENT DETAILS
              </legend>
              <section className="flex flex-col desktop:flex-row tablet:flex-row justify-between mb-8 desktop:mb-12 tablet:mb-6">
                <p className="text-checkout mb-3">Payment Method</p>
                <div className=" flex flex-col w-full desktop:w-1/2 tablet:w-1/2 gap-4 pl-0 desktop:pl-2 tablet:pl-2">
                  <label
                    htmlFor="emoney"
                    className="radio-label text-checkbox relative pl-[52px] flex items-center gap-4 border-[1px] border-inputBorder hover:border-orange rounded-lg py-5"
                  >
                    <input
                      type="radio"
                      name="payment"
                      id="emoney"
                      onClick={eMoney}
                      className="w-[1px] h-[1px] overflow-hidden absolute sr-only peer"
                    />
                    e-Money
                    <span className="w-[20px] ml-4 h-[20px] rounded-[50%] border-inputBorder border-[1px] absolute left-0  peer-checked:before:w-[10px] peer-checked:before:h-[10px] peer-checked:before:bg-orange peer-checked:before:absolute peer-checked:before:rounded-[50%] peer-checked:before:left-1/2 peer-checked:before:top-1/2 peer-checked:before:translate-x-[-50%] peer-checked:before:translate-y-[-50%]"></span>
                  </label>

                  <label
                    htmlFor="cash"
                    className="radio-label text-checkbox relative pl-[52px] flex items-center gap-4 border-[1px] border-inputBorder hover:border-orange rounded-lg py-5 "
                  >
                    <input
                      type="radio"
                      name="payment"
                      id="cash"
                      onClick={cashDelivery}
                      className="w-[1px] h-[1px] overflow-hidden absolute sr-only peer"
                    />
                    Cash on Delivery
                    <span className="w-[20px] ml-4 h-[20px] rounded-[50%] border-inputBorder border-[1px] absolute left-0  peer-checked:before:w-[10px] peer-checked:before:h-[10px] peer-checked:before:bg-orange peer-checked:before:absolute peer-checked:before:rounded-[50%] peer-checked:before:left-1/2 peer-checked:before:top-1/2 peer-checked:before:translate-x-[-50%] peer-checked:before:translate-y-[-50%]"></span>
                  </label>
                </div>
              </section>
              <section
                className={`${
                  payment
                    ? "flex flex-col desktop:flex-row tablet:flex-row"
                    : "hidden"
                } gap-4 mb-8 desktop:mb-12 tablet:mb-[30px]`}
              >
                <label
                  className="text-checkout flex flex-col w-full desktop:w-1/2 tablet:w-1/2"
                  htmlFor="Number"
                >
                  e-Money Number
                  <input
                    type="text"
                    name="Number"
                    id="Number"
                    className="text-checkbox outline-none border-[1px] mt-2 border-inputBorder rounded-lg pl-6 py-5 focus:border-orange caret-orange"
                    placeholder="238521993"
                  />
                </label>

                <label
                  className="text-checkout  flex flex-col w-full desktop:w-1/2 tablet:w-1/2"
                  htmlFor="PIN"
                >
                  e-Money PIN
                  <input
                    type="text"
                    name="PIN"
                    id="PIN"
                    className="text-checkbox outline-none border-[1px] border-inputBorder mt-2 rounded-lg pl-6 py-5 focus:border-orange caret-orange"
                    placeholder="6891"
                  />
                </label>
              </section>
              <section
                className={`${
                  cash ? "flex" : "hidden"
                } items-center gap-8 mt-6 mb-12`}
              >
                <img
                  src="./images/icon-cash-on-delivery.svg"
                  alt="delivery"
                  className="w-[48px] h-[48px]"
                />
                <p className="text-body text-justify desktop:text-left tablet:text-left opacity-50">
                  The ‘Cash on Delivery’ option enables you to pay in cash when
                  our delivery courier arrives at your residence. Just make sure
                  your address is correct so that your order will not be
                  cancelled.
                </p>
              </section>
            </fieldset>
          </section>
          <section className="flex flex-col desktop:w-1/3 tablet:w-full bg-pureWhite px-8 rounded-lg mb-[141px] h-fit">
            <p className="text-h6 pt-8 pb-8">SUMMARY</p>
            <section className="flex flex-col ">
              {products?.map((product, i) => (
                <CartProduct
                  noQuantityChange
                  key={i}
                  product={product}
                  products={products}
                />
              ))}
            </section>
            <section className="flex justify-between pt-2">
              <p className="text-body opacity-50">TOTAL</p>
              <p className="text-h6 tracking-normal">
                $ {totalPrice.toLocaleString()}
              </p>
            </section>
            <section className="flex justify-between pt-2">
              <p className="text-body opacity-50">SHIPPING</p>
              <p className="text-h6 tracking-normal">$ 50</p>
            </section>
            <section className="flex justify-between pt-2 pb-6">
              <p className="text-body opacity-50">VAT (INCLUDED)</p>
              <p className="text-h6 tracking-normal">$ {totalPrice / 5}</p>
            </section>
            <section className="flex justify-between pb-8">
              <p className="text-body opacity-50">GRAND TOTAL</p>
              <p className="text-h6 text-orange tracking-normal">
                $ {totalPrice + 50}
              </p>
            </section>

            <Button handleClick={handleClick} pay>
              CONTINUE & PAY
            </Button>
          </section>
        </form>
      </section>
      <Confirmation visible={visible} setVisible={setVisible}>
        <section className="flex flex-col">
          <img
            src="./images/icon-order-confirmation.svg"
            alt="confirmation"
            className="w-[64px]"
          />
          <p className="text-confirmation_title desktop:text-h3 tablet:text-h3 mb-4 desktop:mb-6 tablet:mb-6 mt-6 desktop:mt-8 tablet:mt-8">
            THANK YOU
            <br /> FOR YOUR ORDER
          </p>
          <p className="text-body opacity-50 mb-6 desktop:mb-8 tablet:mb-8">
            You will receive an email confirmation shortly.
          </p>
          <section className="flex flex-col desktop:flex-row tablet:flex-row mb-[23px] desktop:mb-[46px] tablet:mb-[46px]">
            <article className="w-full desktop:w-7/12 tablet:w-7/12 flex flex-col bg-gray px-6 py-6 rounded-t-lg desktop:rounded-l-lg desktop:rounded-r-none tablet:rounded-l-lg tablet:rounded-r-none">
              <aside className="flex items-center justify-between pb-3">
                <div className="flex gap-4">
                  <img
                    src={products[0].img}
                    alt={products[0].alt}
                    className="w-[50px] rounded-lg"
                  />
                  <div className="flex flex-col">
                    <p className="text-cart_title">{products[0].title}</p>
                    <p className="text-cart_price opacity-50">
                      $ {products[0].price.toLocaleString()}
                    </p>
                  </div>
                </div>

                <p className="flex self-start text-cart_title opacity-50">
                  x{products[0].quantity}
                </p>
              </aside>

              {showItems &&
                products.map((product, index) => {
                  if (index > 0) {
                    return (
                      <aside
                        key={index}
                        className="flex justify-between items-center  pb-3"
                      >
                        <div className="flex gap-4">
                          <img
                            src={product.img}
                            alt={product.alt}
                            className="w-[50px] rounded-lg"
                          />
                          <div className="flex flex-col">
                            <p className="text-cart_title">{product.title}</p>
                            <p className="text-cart_price opacity-50">
                              $ {product.price.toLocaleString()}
                            </p>
                          </div>
                        </div>

                        <p className="flex self-start text-cart_title opacity-50">
                          x{product.quantity}
                        </p>
                      </aside>
                    );
                  }
                })}
              <p
                onClick={() =>
                  showItems ? setShowItems(false) : setShowItems(true)
                }
                className="pt-3 text-checkout opacity-50 text-center border-t border-t-pureBlack/30 hover:cursor-pointer hover:text-orange"
              >
                {showItems && products.length > 1
                  ? "View less"
                  : `and ${products.length - 1} other item(s)`}
              </p>
            </article>
            <article
              className={`bg-pureBlack w-full desktop:w-5/12 tablet:w-5/12 flex flex-col ${
                showItems && products.length > 1
                  ? "justify-end"
                  : "justify-center"
              } items-start pt-[15px] pb-[19px] px-10 desktop:px-8 tablet:px-10 rounded-b-lg desktop:rounded-r-lg desktop:rounded-l-none tablet:rounded-r-lg tablet:rounded-l-none`}
            >
              <p className="text-body opacity-50 text-pureWhite mb-2">
                GRAND TOTAL
              </p>
              <p className="text-h6 text-pureWhite">
                $ {(totalPrice + 50).toLocaleString()}
              </p>
            </article>
          </section>
          <Link to="/">
            <Button confirmation>BACK TO HOME</Button>
          </Link>
        </section>
      </Confirmation>
    </main>
  );
};

export default Checkout;
