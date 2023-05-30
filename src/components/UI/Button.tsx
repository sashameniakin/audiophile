import { FC } from "react";

type Props = {
  children: string;
  secondary?: boolean;
};

const Button: FC<Props> = ({ children, secondary }) => {
  return (
    <button
      className={`w-[160px] h-[48px] z-10 text-pureWhite text-button ${
        secondary
          ? "bg-pureBlack hover:bg-buttonGray"
          : "bg-orange hover:bg-secOrange"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
