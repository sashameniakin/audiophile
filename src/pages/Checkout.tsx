import { FC, useContext, useState } from "react";
import CartProduct from "../components/CartProduct";
import { ProductContext } from "../context/context";
import { ProductsContextType } from "../@types/products";
import Button from "../components/UI/Button";

const Checkout: FC = () => {
  const { products, totalPrice } = useContext(
    ProductContext
  ) as ProductsContextType;

  const [payment, setPayment] = useState<boolean>(false);
  const [cash, setCash] = useState<boolean>(false);

  function cashDelivery() {
    setCash(true);
    setPayment(false);
  }

  function eMoney() {
    setCash(false);
    setPayment(true);
  }

  return (
    <main className="bg-gray ">
      <section className="w-[80%] mx-auto">
        <p className="pt-[79px] pb-[38px] w-fit text-body opacity-50 hover:text-orange hover:opacity-100 hover:cursor-pointer">
          Go Back
        </p>
        <form className="flex gap-[30px]">
          <section className="bg-pureWhite w-2/3 px-[28px] mb-[141px] rounded-lg">
            <p className="pt-[54px] text-h3 mb-[41px]">CHECKOUT</p>
            <fieldset>
              <legend className="text-sub_title text-orange mb-4">
                BILLING DETAILS
              </legend>
              <section className="flex gap-4">
                <label
                  className="text-checkout flex flex-col w-1/2"
                  htmlFor="name"
                >
                  Name
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="text-checkbox outline-none border-[1px] mt-2 border-inputBorder rounded-lg pl-6 py-5 focus:border-orange"
                    placeholder="Alexei Ward"
                  />
                </label>

                <label className="text-checkout email-label flex flex-col w-1/2">
                  <div className="flex justify-between">
                    <p>Email Address</p>
                    <p className="hidden">Wrong format</p>
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="text-checkbox outline-none mt-2 border-[1px] border-inputBorder rounded-lg pl-6 py-5 focus:border-orange focus:invalid:border-invalid focus:invalid:border-[2px] focus:invalid:text-pureBlack focus:invalid:pb-4"
                    placeholder="alexei@mail.com"
                  />
                </label>
              </section>

              <label
                className="text-checkout flex flex-col mt-6 w-1/2 pr-2"
                htmlFor="phone-number"
              >
                Phone Number
                <input
                  type="text"
                  name="phone-number"
                  id="phone-number"
                  className="text-checkbox outline-none border-[1px] mt-2 border-inputBorder rounded-lg pl-6 py-5 focus:border-orange"
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
                  className="text-checkbox outline-none mt-2 border-[1px] border-inputBorder rounded-lg pl-6 py-5 focus:border-orange"
                  placeholder="1137 Williams Avenue"
                />
              </label>

              <section className="flex gap-4 mt-6">
                <label
                  className="text-checkout flex flex-col w-1/2"
                  htmlFor="zip-code"
                >
                  ZIP Code
                  <input
                    type="text"
                    name="zip-code"
                    id="zip-code"
                    className="text-checkbox outline-none border-[1px] mt-2 border-inputBorder rounded-lg pl-6 py-5 focus:border-orange"
                    placeholder="10001"
                  />
                </label>

                <label
                  className="text-checkout  flex flex-col w-1/2"
                  htmlFor="city"
                >
                  City
                  <input
                    type="text"
                    name="city"
                    id="city"
                    className="text-checkbox outline-none border-[1px] border-inputBorder mt-2 rounded-lg pl-6 py-5 focus:border-orange"
                    placeholder="New York"
                  />
                </label>
              </section>

              <label
                className="text-checkout flex flex-col w-1/2 pr-2 mt-6"
                htmlFor="city"
              >
                Country
                <input
                  type="text"
                  name="country"
                  id="country"
                  className="text-checkbox outline-none border-[1px] border-inputBorder mt-2 rounded-lg pl-6 py-5 focus:border-orange"
                  placeholder="United States"
                />
              </label>
            </fieldset>
            <fieldset className="mt-[61px]">
              <legend className="text-sub_title text-orange mb-4">
                PAYMENT DETAILS
              </legend>
              <section className="flex justify-between mb-12">
                <p className="text-checkout">Payment Method</p>
                <div className=" flex flex-col w-1/2 gap-4 pl-2">
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
                className={`${payment ? "flex" : "hidden"} gap-4 mt-6 mb-12`}
              >
                <label
                  className="text-checkout flex flex-col w-1/2"
                  htmlFor="Number"
                >
                  e-Money Number
                  <input
                    type="text"
                    name="Number"
                    id="Number"
                    className="text-checkbox outline-none border-[1px] mt-2 border-inputBorder rounded-lg pl-6 py-5 focus:border-orange"
                    placeholder="238521993"
                  />
                </label>

                <label
                  className="text-checkout  flex flex-col w-1/2"
                  htmlFor="PIN"
                >
                  e-Money PIN
                  <input
                    type="text"
                    name="PIN"
                    id="PIN"
                    className="text-checkbox outline-none border-[1px] border-inputBorder mt-2 rounded-lg pl-6 py-5 focus:border-orange"
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
                <p className="text-body opacity-50">
                  The ‘Cash on Delivery’ option enables you to pay in cash when
                  our delivery courier arrives at your residence. Just make sure
                  your address is correct so that your order will not be
                  cancelled.
                </p>
              </section>
            </fieldset>
          </section>
          <section className="flex flex-col w-1/3 bg-pureWhite px-8 rounded-lg mb-[141px] h-fit">
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
            <Button pay>CONTINUE & PAY</Button>
          </section>
        </form>
      </section>
    </main>
  );
};

export default Checkout;
