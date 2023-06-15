import { FC } from "react";

const Checkout: FC = () => {
  return (
    <main className="bg-gray ">
      <section className="w-[80%] mx-auto">
        <p className="pt-[79px] pb-[38px] w-fit text-body opacity-50 hover:text-orange hover:opacity-100 hover:cursor-pointer">
          Go Back
        </p>
        <form className="flex gap-[30px]">
          <section className="bg-pureWhite w-2/3 px-[28px] rounded-lg">
            <p className="pt-[54px] text-h3 mb-[41px]">CHECKOUT</p>
            <fieldset>
              <legend className="text-sub_title text-orange mb-4">
                BILLING DETAILS
              </legend>
              <section className="flex gap-4">
                <div className="flex flex-col w-1/2">
                  <label className="text-checkout mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="border-[1px] border-inputBorder rounded-lg pl-6 py-[18px]"
                    placeholder="Alexei Ward"
                  />
                </div>
                <div className="flex flex-col w-1/2">
                  <label className="text-checkout mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="border-[1px] border-inputBorder rounded-lg pl-6 py-[18px]"
                    placeholder="alexei@mail.com"
                  />
                </div>
              </section>
              <div className="flex flex-col mt-6 w-1/2 pr-2">
                <label className="text-checkout mb-2" htmlFor="phone-number">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone-number"
                  id="phone-number"
                  className="border-[1px] border-inputBorder rounded-lg pl-6 py-[18px]"
                  placeholder="+1 202-555-0136"
                />
              </div>
            </fieldset>
            <fieldset className="mt-[53px]">
              <legend className="text-sub_title text-orange mb-4">
                SHIPPING INFO
              </legend>
              <div className="flex flex-col">
                <label className="text-checkout mb-2" htmlFor="address">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="border-[1px] border-inputBorder rounded-lg pl-6 py-[18px]"
                  placeholder="1137 Williams Avenue"
                />
              </div>
              <section className="flex gap-4 mt-6">
                <div className="flex flex-col w-1/2">
                  <label className="text-checkout mb-2" htmlFor="zip-code">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    name="zip-code"
                    id="zip-code"
                    className="border-[1px] border-inputBorder rounded-lg pl-6 py-[18px]"
                    placeholder="10001"
                  />
                </div>
                <div className="flex flex-col w-1/2">
                  <label className="text-checkout mb-2" htmlFor="city">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    className="border-[1px] border-inputBorder rounded-lg pl-6 py-[18px]"
                    placeholder="+1 202-555-0136"
                  />
                </div>
              </section>
              <div className="flex flex-col w-1/2 pr-2 mt-6">
                <label className="text-checkout mb-2" htmlFor="city">
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  id="country"
                  className="border-[1px] border-inputBorder rounded-lg pl-6 py-[18px]"
                  placeholder="United States"
                />
              </div>
            </fieldset>
            <fieldset className="mt-[61px]">
              <legend className="text-sub_title text-orange mb-4">
                PAYMENT DETAILS
              </legend>
              <section className="flex justify-between">
                <p className="text-checkout">Payment Method</p>
                <div className=" flex flex-col w-1/2 gap-4 pl-2">
                  <div className="flex items-center gap-4 border-[1px] border-inputBorder rounded-lg py-[18px] pl-4">
                    <input
                      type="radio"
                      name="payment"
                      id="emoney"
                      className="w-[20px] h-[20px]"
                    />
                    <label htmlFor="emoney" className="text-checkbox">
                      e-Money
                    </label>
                  </div>
                  <div className="flex items-center gap-4 border-[1px] border-inputBorder rounded-lg py-[18px] pl-4">
                    <input
                      type="radio"
                      name="payment"
                      id="cash"
                      className="w-[20px] h-[20px] accent-orange bg-pureWhite "
                    />
                    <label htmlFor="cash" className="text-checkbox">
                      Cash on Delivery
                    </label>
                  </div>
                </div>
              </section>
            </fieldset>
          </section>
          <section className="flex flex-col bg-pureWhite rounded-lg">
            <p>SUMMARY</p>
          </section>
        </form>
      </section>
    </main>
  );
};

export default Checkout;
