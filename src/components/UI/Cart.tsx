import { Dispatch, FC, ReactChild, ReactNode, SetStateAction } from "react";

type Props = {
  children: ReactNode | ReactChild;
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
};

const Cart: FC<Props> = ({ children, visible, setVisible }) => {
  return (
    <section
      className={`fixed top-0 bottom-0 left-0 right-0 z-40 bg-bgGray ${
        visible
          ? "flex items-start justify-center tablet:justify-end desktop:justify-end"
          : "hidden"
      }`}
      onClick={() => setVisible(false)}
    >
      <article
        className="bg-pureWhite mt-6 desktop:mt-8 tablet:mt-6 desktop:mr-[165px] tablet:mr-[40px] rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </article>
    </section>
  );
};

export default Cart;
