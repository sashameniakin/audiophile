import { FC } from "react";

type Props = {
  children: string;
  secondary?: boolean;
  third?: boolean;
};

const Button: FC<Props> = ({ children, secondary, third }) => {
  return (
    <button
      className={`w-[160px] h-[48px] z-10  text-button ${
        secondary
          ? "bg-pureBlack text-pureWhite hover:bg-buttonGray"
          : third
          ? "border-[1px] text-pureBlack border-pureBlack hover:bg-pureBlack hover:text-pureWhite"
          : "bg-orange text-pureWhite hover:bg-secOrange"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
