import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  secondary?: boolean;
  third?: boolean;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  pay?: boolean;
};

const Button: FC<Props> = ({
  children,
  secondary,
  third,
  handleClick,
  pay,
}) => {
  return (
    <button
      onClick={handleClick}
      className={`${
        pay ? "w-full mb-8" : "w-[160px]"
      } h-[48px] z-10  text-button ${
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
