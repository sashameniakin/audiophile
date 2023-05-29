import { FC } from "react";

type Props = {
  children: string;
};

const Button: FC<Props> = ({ children }) => {
  return (
    <button className="w-[160px] h-[48px] text-pureWhite text-button bg-orange hover:bg-secOrange">
      {children}
    </button>
  );
};

export default Button;
