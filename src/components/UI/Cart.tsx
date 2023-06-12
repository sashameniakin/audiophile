import { Dispatch, FC, ReactChild, ReactNode, SetStateAction } from "react";

type Props = {
  children: ReactNode | ReactChild;
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
};

const Cart: FC<Props> = ({ children, visible, setVisible }) => {
  return (
    <section
      className={`fixed top-[94px] bottom-0 left-0 right-0 z-40 bg-bgGray ${
        visible ? "flex items-start justify-end" : "hidden"
      }`}
      onClick={() => setVisible(false)}
    >
      <article
        className="bg-pureWhite mt-8 mr-[165px] rounded-lg p-3"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </article>
    </section>
  );
};

export default Cart;
