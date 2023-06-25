import { Dispatch, FC, ReactChild, ReactNode, SetStateAction } from "react";

type Props = {
  children: ReactNode | ReactChild;
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
};

const Confirmation: FC<Props> = ({ children, visible, setVisible }) => {
  return (
    <section
      className={`fixed top-0 bottom-0 left-0 right-0 z-20 bg-bgGray ${
        visible ? "flex items-center  justify-center" : "hidden"
      }`}
      onClick={() => setVisible(false)}
    >
      <article
        className="bg-pureWhite desktop:w-5/12 tablet:w-full mt-0 mx-6 desktop:mx-auto tablet:mx-[114px] px-8 desktop:px-12 tablet:px-12 py-8 desktop:py-12 tablet:py-12 rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </article>
    </section>
  );
};

export default Confirmation;
